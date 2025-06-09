import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClient from "./lib/mongoClient";
import Mailgun from "next-auth/providers/mailgun";
import credentials from "next-auth/providers/credentials";

const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(mongoClient),
  providers: [Mailgun, credentials],
  session: {
    strategy: "jwt",
  },
});

export { handlers, auth, signIn, signOut };
