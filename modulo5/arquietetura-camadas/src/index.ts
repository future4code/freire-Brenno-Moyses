import {app} from "./controller/app"
import UserController from "./controller/UserController"

const userController = new UserController()

app.post ("/criar-usuario", userController.create)