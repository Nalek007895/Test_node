import Joi from "joi";

export const DeleteOrderHistoryDto = Joi.object({
    id: Joi.string().optional(),
    order_list: Joi.string().optional(),
    quantity_total: Joi.number().optional(),
    price_total: Joi.number().optional(),
    date_of_order: Joi.date().optional()
    //name: Joi.string().required(),
    //price: Joi.number().optional().default(0)
})