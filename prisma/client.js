import { PrismaClient } from "@prisma/client";
// Singleton pattern to ensure a single instance of PrismaClient
const prisma = new PrismaClient();
export default prisma;