const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
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

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  controllers.updateSubscription
);
router.patch(
  "/avatar",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
