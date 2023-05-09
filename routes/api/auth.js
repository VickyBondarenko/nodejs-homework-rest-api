const express = require("express");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
const controllers = require("../../controllers/auth-controllers");
const router = express.Router();

// singup
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  controllers.register
);

router.post("/login", validateBody(schemas.loginSchema), controllers.login);
module.exports = router;
