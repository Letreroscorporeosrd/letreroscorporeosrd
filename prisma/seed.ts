import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("cambiar-esta-clave", 10);

  await prisma.adminUser.upsert({
    where: { email: "admin@letreroscorporeosrd.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@letreroscorporeosrd.com",
      passwordHash,
      role: "OWNER",
    },
  });

  await prisma.settings.upsert({
    where: { id: "singleton" },
    update: {},
    create: {
      id: "singleton",
      instagramUrl: "https://instagram.com/letreroscorporeosrd",
    },
  });

  console.log("Seed completo. Usuario admin: admin@letreroscorporeosrd.com / cambiar-esta-clave");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
