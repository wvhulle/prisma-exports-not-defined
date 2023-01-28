import { dev } from "$app/environment";
import { json } from "@sveltejs/kit";

import Prisma, * as PrismaScope from "../../prisma/client"
const PrismaClient = Prisma?.PrismaClient || PrismaScope?.PrismaClient;
const prisma = new PrismaClient();

export const load = async () => {
    json({ users: await prisma.user.findMany() })
}