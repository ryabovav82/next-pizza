import {prisma} from "../prisma/prisma-client";
import { hashSync } from 'bcrypt';
import { categories, ingredients, products } from "./constans";
import { Prisma } from "@prisma/client";
import { connect } from "http2";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) *10 + min *10) /10;
}

const generateProductItem =({productId, pizzaType, size}: {productId: number; pizzaType?: 1 | 2; size?: 20 | 30 | 40;}) => {
    return {
        productId,
        price: randomNumber(190, 600),
        pizzaType,
        size,
    } as unknown as Prisma.ProductItemUncheckedCreateInput;
};

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

    await prisma.category.createMany({
        data: categories
    });

    await prisma.ingredient.createMany({
        data: ingredients
    });

    await prisma.product.createMany({
        data: products
    });

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Пепперони фреш',
            imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5),
            }
        }
    });

    const pizza2 = await prisma.product.create({
        data: {
            name: 'Сырная',
            imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 10),
            }
        }
    });

    const pizza3 = await prisma.product.create({
        data: {
            name: 'Чоризо фреш',
            imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 40),
            }
        }
    });

    await prisma.productItem.createMany({
        data: [
            generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
            generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
            generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

            generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

            generateProductItem({ productId: 1}),
            generateProductItem({ productId: 2}),
            generateProductItem({ productId: 3}),
        ]
    });

    await prisma.cart.createMany ({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '11111'
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '22222'
            },
        ]
    });

    await prisma.cartItem.create ({
        data: {
                productItemId: 1,
                cartId: 1,
                quantity: 2,
                ingredients: {
                    connect: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
                },
             },
    });
}

async function down () {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
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