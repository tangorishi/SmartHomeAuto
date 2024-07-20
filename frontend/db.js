import { PrismaClient } from '@prisma/client';

let client;

export default async function getClient() {
  if (!client) {
    client = new PrismaClient();
  }
  return client;
}