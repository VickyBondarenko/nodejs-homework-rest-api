const express = require("express");
const controllers = require("../../controllers/contacts-controllers");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();
const { isValidId } = require("../../middlewares");

router.get("/", controllers.getAll);

router.get("/:contactId", isValidId, controllers.getById);

router.post(
  "/",
  validateBody(schemas.contactAddSchema),
  controllers.addContact
);

router.delete("/:contactId", isValidId, controllers.deleteByID);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.contactAddSchema),
  controllers.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoritMovie),
  controllers.updateFavoritContact
);
module.exports = router;
