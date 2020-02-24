import { Joi } from "celebrate";

export const accountParamsSchema = Joi.object({
    accountId: Joi.string()
        .alphanum()
        .required("A valid account id is required"),
}).required();
