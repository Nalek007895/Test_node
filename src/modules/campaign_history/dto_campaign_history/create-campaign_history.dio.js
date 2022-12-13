import Joi from "joi";

export const CreateCampaignDto = Joi.object({
    
    id: Joi.string().optional(),
    campaign_model: Joi.string().required(),
    start_date_campaign: Joi.date().required(),
    end_date_campaign: Joi.date().required()
    
})