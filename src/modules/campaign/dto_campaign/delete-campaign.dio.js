import Joi from "joi";

export const DeleteCampaignDto = Joi.object({
    
    id: Joi.string().optional(),
    campaign_model: Joi.string().optional(),
    start_date_campaign: Joi.date().optional(),
    end_date_campaign: Joi.date().optional()

})