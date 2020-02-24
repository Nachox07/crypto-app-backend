import { Joi } from "celebrate";

export const accountParamsSchema = Joi.object({
    accountId: Joi.string()
        .alphanum()
        .required(),
}).required();
