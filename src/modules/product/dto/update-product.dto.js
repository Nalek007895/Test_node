import Joi from "joi";

export const UppdatProductDto = Joi.object({
    //id: Joi.string().optional(),
    name: Joi.string().optional(),
    price: Joi.number().optional()

})

