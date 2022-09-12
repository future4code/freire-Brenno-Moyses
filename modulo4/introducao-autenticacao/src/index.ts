import { app } from "./app";
import { signupFunction } from "./endpoints/signup";


app.post("/user/signup", signupFunction)