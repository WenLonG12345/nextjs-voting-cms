import { db } from "@/server/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { customSession } from "better-auth/plugins";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      storeId: {
        type: "string",
        required: false,
      },
    },
  },
  plugins: [
    nextCookies(),
    admin(),
    customSession(async ({ user, session }) => {
      // const store = await db.store.findUnique({
      //   where: {
      //     userId: user.id,
      //   },
      // });

      return {
        user: {
          ...user,
          // storeId: store?.id,
        },
        session,
      };
    }),
  ],
});

export type Session = typeof auth.$Infer.Session;
