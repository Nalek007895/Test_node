import Joi from "joi";

export const CreateCustomersDto = Joi.object({
    
    id: Joi.string().optional(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    sex: Joi.string().required(),
    date_of_birth: Joi.date().required(),
    phone_number: Joi.string().required(),
    // Sub_district: Joi.string().required(),
    // District: Joi.string().required(),
    address: ({
        house_number: Joi.string().required(),
        sub_district: Joi.string().required(),
        district: Joi.string().required(),
        province: Joi.string().required()
    }),
    email: Joi.string().required()
    
})