import {prisma} from "@/prisma/prisma-client";
import { hashSync } from 'bcrypt';

async function up () {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User test',
                email: 'user@example.com',
                password: hashSync('1111', 10),
                verified: new Date(),
                role: 'USER'
            },
            {
                fullName: 'Admin test',
                email: 'admin@example.com',
                password: hashSync('1111', 10),
                verified: new Date(),
                role: 'ADMIN'
            }
        ]
    });
}

async function down () {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main () {
    try {
        await down();
        await up();
    } catch (e){
        console.error(e)
    }
}

main().then(async () => {
    await prisma.$disconnect();
}) .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});