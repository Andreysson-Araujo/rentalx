import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import uploadConfig from "../config/upload";
import { UpdateUserAvatarUseController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarControler";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarUserControler = new UpdateUserAvatarUseController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarUserControler.handle
);

export { usersRoutes };
