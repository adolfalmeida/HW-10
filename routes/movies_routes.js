import express from "express";
import Movies_Controller from "../controllers/movies_controllers.js";
import { multerMiddleware } from "../middlewares/multer.js";

const movies_routes = express.Router();

movies_routes.get("/movies/title", Movies_Controller.getMoviesByTitle);
movies_routes.get("/movies", Movies_Controller.getAllMovies);
movies_routes.get("/movies/:id", Movies_Controller.getMoviesById);

movies_routes.post(
  "/movies/post",
  multerMiddleware,
  Movies_Controller.registerMovies
);
movies_routes.put(
  "/movies/update/:id",
  multerMiddleware,
  Movies_Controller.updateMovies
);
movies_routes.delete("/movies/delete/:id", Movies_Controller.deleteMovies);

export { movies_routes };
