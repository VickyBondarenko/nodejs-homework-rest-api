const express = require("express");
const controllers = require("../../controllers/contacts-controllers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authenticate, controllers.getAll);

router.get("/:contactId", authenticate, isValidId, controllers.getById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.contactAddSchema),
  controllers.addContact
);

router.delete("/:contactId", authenticate, isValidId, controllers.deleteByID);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.contactAddSchema),
  controllers.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoritMovie),
  controllers.updateFavoritContact
);
module.exports = router;
