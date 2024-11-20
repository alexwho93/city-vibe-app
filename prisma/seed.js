const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: "John Doe",
      email: "user@example.com",
      password: "pass1234",
      image: "https://example.com/alice.jpg",
    },
  ];

  console.log("Start seeding...");
  for (const user of users) {
    const createdUser = await prisma.user.create({
      data: {
        ...user,
        // Add default values for required fields if they're not provided
        image: user.image || null,
      },
    });
    console.log(`Created user with id: ${createdUser.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
