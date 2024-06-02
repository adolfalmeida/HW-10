import User_Services from "../services/users_service.js";

class User_Controller {
  static async getAllUser(req, res, next) {
    try {
      const page = req.query.page;
      const data = await User_Services.getUser(page);

      res.status(200).json({
        message: "Berhasil menampilkan data",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getuserById(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const data = await User_Services.getById(id);

      res.status(200).json({
        message: "Berhasil menampilkan data berdasarkan ID",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const data = req.body;
      const registerUser = await User_Services.register(data);

      res.status(200).json({
        message: "Register berhasil",
        registerUser,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const data = req.body;

      const accessToken = await User_Services.login(data);

      res.status(200).json({
        message: "Login berhasil",
        accessToken,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const id = req.token_id;
      const data = req.body;

      const editUser = await User_Services.update(id, data);

      res.status(200).json({
        message: "Update User berhasil",
        editUser,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const id = parseInt(req.params.id);

      const dropUser = await User_Services.delete(id);

      res.status(200).json({
        message: "Delete User berhasil",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default User_Controller;
