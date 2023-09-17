import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Discord from "@auth/core/providers/discord";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";

export const authOptions = 
{
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
};
