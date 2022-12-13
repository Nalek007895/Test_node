import Joi from "joi";
import { now } from "mongoose";

export const CreateOrderHistoryDto = Joi.object({
    
    id: Joi.string().optional(),
    order_list: Joi.string().required(),
    quantity_total: Joi.number().required(),
    price_total: Joi.number().required(),
    customer_id: Joi.string().required(),
    date_of_order: Joi.date().default(now)
    
})