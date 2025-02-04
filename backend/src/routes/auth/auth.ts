import { Router } from "express";

const router = Router();
const authController = require("../auth/authController");

router.post("/decode", authController.decodeToken);
router.get("/", authController.login);

export default router;
