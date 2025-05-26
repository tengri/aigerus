import Credentials from "next-auth/providers/credentials";
// import { db } from "./mongoClient";

const credentials = Credentials({
  // You can specify which fields should be submitted, by adding keys to the `credentials` object.
  // e.g. domain, username, password, 2FA token, etc.
  credentials: {
    email: {},
    password: {},
  },
  authorize: async (credentials) => {
    let user = null;

    // logic to salt and hash password
    const pwHash = saltAndHashPassword(credentials.password);

    // logic to verify if the user exists
    user = await db.collection("users").findOne({ email: credentials.email });

    if (!user) {
      // No user found, so this is their first attempt to login
      // Optionally, this is also the place you could do a user registration
      throw new Error("Invalid credentials.");
    }

    // return user object with their profile data
    return user;
  },
});
