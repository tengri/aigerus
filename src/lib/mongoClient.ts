// import { MongoClient } from "mongodb";

// const client = new MongoClient(process.env.MONGODB_URI!);

// export default client;

import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/test");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

const user = new User({ email: "test@test.com", password: "test" });
user.save().then(() => console.log("meow"));
