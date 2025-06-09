import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const flats = await prisma.flat.findMany();
}

main();
