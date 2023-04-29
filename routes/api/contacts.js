const express = require("express");
const controllers = require("../../controllers/contacts-controllers");
const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/contactAdd");
const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:contactId", controllers.getById);

router.post("/", validateBody(schema.contactAddSchema), controllers.addContact);

router.delete("/:contactId", controllers.deleteByID);

router.put(
  "/:contactId",
  validateBody(schema.contactAddSchema),
  controllers.updateById
);

module.exports = router;
