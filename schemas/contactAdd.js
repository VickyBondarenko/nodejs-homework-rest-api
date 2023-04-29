const Joi = require("joi");

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing fields`,
    "string.base": `missing fields`,
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .required(),
  phone: Joi.number().required(),
});

module.exports = {
  contactAddSchema,
};
