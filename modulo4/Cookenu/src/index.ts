import {app} from "./app"
import { createRecipe } from "./endpoints/createRecipe";
import { getProfile } from "./endpoints/getProfile";
import { getRecipe } from "./endpoints/getRecipe";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup"

app.post("/signup", signup );
app.post("/login", login);
app.get("/user/profile", getProfile)
app.post("/recipe", createRecipe)
app.get ("/recipe/:id", getRecipe)
app.get ("/user/:id", getProfile)