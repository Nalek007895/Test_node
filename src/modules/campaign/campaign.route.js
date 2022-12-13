import express from 'express'
import CampaignControllers from './controllers_campaign/campaign.controllers.js'
import { createValidator } from 'express-joi-validation';
import { CreateCampaignDto } from './dto_campaign/create-campaign.dio.js';
import { UppdatCampaignDto } from './dto_campaign/update-campaign.dto.js';
import { DeleteCampaignDto } from './dto_campaign/delete-campaign.dio.js';

const CampaignRouter = express.Router()
const validator = createValidator({})

CampaignRouter.get('/', CampaignControllers.getCampaign)
CampaignRouter.get('/:id', CampaignControllers.getCampaignById)
CampaignRouter.post('/',validator.body(CreateCampaignDto), CampaignControllers.createCampaign)
CampaignRouter.put('/:id',validator.body(UppdatCampaignDto), CampaignControllers.uppdatCampaign)
//CampaignRouter.patch('/:id',validator.body(UppdatCustomersDto), CampaignControllers.uppdatCustomers)
CampaignRouter.delete('/:id',validator.body(DeleteCampaignDto), CampaignControllers.deleteCampaign)

export default CampaignRouter