import Joi from "joi";

export const DeleteProductDto = Joi.object({
    id: Joi.string().optional()
    //name: Joi.string().required(),
    //price: Joi.number().optional().default(0)
})