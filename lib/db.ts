// official setup: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

import { PrismaClient } from "@prisma/client";

// Declare a global variable to hold the PrismaClient instance.
// This avoids TypeScript errors when accessing globalThis.prisma later.
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a PrismaClient instance or reuse an existing one if available in the global scope.
// This ensures that only one instance of PrismaClient is created.
export const db = globalThis.prisma || new PrismaClient();

// In development mode, assign the PrismaClient instance to globalThis.prisma.
// This makes the instance reusable across different parts of the application.
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
