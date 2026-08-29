import { Router } from "express";
import { contactController } from "../controllers/contact.controller.js";

const contactRouter = Router();

contactRouter.route("/").post(contactController);

export default contactRouter;