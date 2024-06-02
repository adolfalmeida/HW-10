import Movies_Services from "../services/movies_services.js";
import { multerMiddleware } from "../middlewares/multer.js";

class Movies_Controller {
  static async getAllMovies(req, res, next) {
    try {
      const page = req.query.page;
      const data = await Movies_Services.getAll(page);

      res.status(200).json({
        message: "Berhasil menampilkan movies",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getMoviesById(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const data = await Movies_Services.getById(id);

      res.status(200).json({
        message: "Berhasil menampilkan movies berdasarkan ID",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getMoviesByTitle(req, res, next) {
    try {
      const title = req.body;

      const data = await Movies_Services.getMovies(title);

      res.status(200).json({
        message: "Berhasil menampilkan movie berdasarkan judul",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async registerMovies(req, res, next) {
    try {
      const data = req.body;
      const fileName = req.file.filename;
      const fileMimeType = req.file.mimetype;

      const moviesData = await Movies_Services.post(
        fileName,
        fileMimeType,
        data
      );

      res.status(200).json({
        message: "Berhasil register movie",
        moviesData,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateMovies(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      const fileName = req.file.filename;
      const fileMimeType = req.file.mimetype;

      const editMovies = await Movies_Services.update(
        id,
        fileName,
        fileMimeType,
        data
      );

      res.status(200).json({
        message: "Update berhasil",
        editMovies,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMovies(req, res, next) {
    try {
      const id = parseInt(req.params.id);

      const dropMovies = await Movies_Services.delete(id);

      res.status(200).json({
        message: "Berhasil menghapus movie",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default Movies_Controller;
