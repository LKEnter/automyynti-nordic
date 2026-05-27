import "./load-env";
import { UserRole } from "@prisma/client";
import crypto from "crypto";
import { prisma } from "../lib/prisma";

/** Server-side password hashing using Node crypto (no native bcrypt binary). */
function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 100_000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}

async function seedAdminUser() {
  const email = process.env.MORFOOS_ADMIN_EMAIL?.trim();
  const password = process.env.MORFOOS_ADMIN_PASSWORD?.trim();

  if (!email || !password) {
    console.error(
      "❌ Seeding halted: MORFOOS_ADMIN_EMAIL or MORFOOS_ADMIN_PASSWORD missing in .env or .env.local"
    );
    process.exit(1);
  }

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      passwordHash: hashPassword(password),
      name: "Master Admin",
      role: UserRole.SUPERADMIN,
    },
  });

  return email;
}

async function seedSiteRecord(siteId: string, name: string) {
  await prisma.site.upsert({
    where: { id: siteId },
    update: { name },
    create: {
      id: siteId,
      name,
      hasBlog: false,
      hasReviews: false,
      hasReferences: false,
      hasTeam: false,
      hasContacts: true,
      hasChatbot: false,
      isChatbotPaid: false,
    },
  });
}

async function seedSiteDefaults(siteId: string) {
  await prisma.globalContactInfo.upsert({
    where: { siteId },
    update: {},
    create: {
      siteId,
      companyName: "Esimerkki Yritys Oy",
      businessId: "",
      phone: "+358401234567",
      email: "info@esimerkkiyritys.fi",
      address: "Keskuskatu 12 A",
      postalCode: "00100",
      city: "Helsinki",
      openingHours: "Arkisin 8–16",
      socialLinks: {},
    },
  });

  await prisma.chatbotSettings.upsert({
    where: { siteId },
    update: {},
    create: {
      siteId,
      isEnabled: true,
      hubTitle: "Miten voimme auttaa?",
      buttonLabel: "Tarvitsetko apua?",
      triggerDelaySec: 3,
      primaryColor: "#001EB3",
      avatarType: "bot",
      appsConfig: {},
    },
  });

  await prisma.blogCategory.upsert({
    where: { siteId_slug: { siteId, slug: "yleinen" } },
    update: {},
    create: {
      siteId,
      name: "Yleinen",
      slug: "yleinen",
      description: "Oletuskategoria",
    },
  });
}

async function main() {
  const email = await seedAdminUser();
  const siteId = process.env.NEXT_PUBLIC_SITE_ID?.trim() || "development";
  const siteName = "Esimerkki Yritys Oy";

  await seedSiteRecord(siteId, siteName);
  await seedSiteDefaults(siteId);

  console.log("\n=================================================");
  console.log("✅ DATABASE SEEDED SUCCESSFULLY");
  console.log(`👤 Primary Admin: ${email}`);
  console.log(`🌐 Site ID: ${siteId}`);
  console.log("=================================================\n");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
