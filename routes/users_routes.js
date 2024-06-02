import express from "express";
import User_Controller from "../controllers/users_controllers.js";

const user_routes = express.Router();

user_routes.post("/register", User_Controller.register);
user_routes.post("/login", User_Controller.login);

user_routes.get("/users", User_Controller.getAllUser);
user_routes.get("/user/:id", User_Controller.getuserById);
user_routes.put("/edit/user", User_Controller.updateUser);

user_routes.delete("/delete/:id", User_Controller.deleteUser);

export { user_routes };
