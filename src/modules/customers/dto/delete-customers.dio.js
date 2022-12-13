import Joi from "joi";

export const DeleteCustomersDto = Joi.object({
    id: Joi.string().optional(),
    first_name: Joi.string().optional(),
    last_name: Joi.string().optional(),
    sex: Joi.string().optional(),
    date_of_birth: Joi.date().optional(),
    phone_number: Joi.string().optional(),
    // Sub_district: Joi.string().required(),
    // District: Joi.string().required(),
    address: ({
        house_number: Joi.string().optional(),
        sub_district: Joi.string().optional(),
        district: Joi.string().optional(),
        province: Joi.string().optional()
    }),
    email: Joi.string().optional()
    //name: Joi.string().required(),
    //price: Joi.number().optional().default(0)
})