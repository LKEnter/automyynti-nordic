import { initMorfoosOS } from "@morfoos/morfoos-os/server";
import { getMorfoosPrisma } from "./prisma";

/** Initializes morfoos-os with the host site's shared Prisma client. */
export const morfoos = initMorfoosOS({
  prismaClient: getMorfoosPrisma(),
});
