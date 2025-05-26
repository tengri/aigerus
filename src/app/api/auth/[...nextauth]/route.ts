import { handlers } from "../../../../auth";
console.log("auth route handlers: ", handlers); // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
