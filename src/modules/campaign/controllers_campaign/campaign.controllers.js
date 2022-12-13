import CampaignService from "../services_campaign/campaign.service.js"
//import CustomersService from "../../customers/services/customers.service.js";

const CampaignControllers = {
    getCampaign: async (req, res) => {
        const Campaign = await CampaignService.getAll()
        res.status(200).json({
            success: true,
            data: Campaign
        })
    },
    getCampaignById: async (req, res) => {
        const { id } = req.params
        const Campaign = await CampaignService.getOne(id)
        res.status(200).json({
            success: true,
            data: Campaign
        })
    },
    createCampaign: async (req, res) => {
        const { campaign_model, start_date_campaign, end_date_campaign } = req.body
        const created = await CampaignService.create({ campaign_model, start_date_campaign, end_date_campaign })

        res.status(201).json({
            success: true,
            data: created
        })
    },
    uppdatCampaign: async (req, res) => {
        const { id } = req.params
        const { campaign_model, start_date_campaign, end_date_campaign } = req.body
        //const customer = await CustomersService.getOne(customer_id)
        const updated = await CampaignService.updateOne(id, { campaign_model, start_date_campaign, end_date_campaign })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteCampaign: async (req, res) => {
        const { id } = req.params
        //const deleted = await CampaignService.deleteOne(id, { name, price })
        const deleted = await CampaignService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: deleted
        })  
    }
}

export default CampaignControllers