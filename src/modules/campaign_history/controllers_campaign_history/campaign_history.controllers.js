import CampaignHistoryService from "../services_campaign_history/campaign_history.service.js"
//import CustomersService from "../../customers/services/customers.service.js";

const CampaignHistoryControllers = {
    getCampaignHistory: async (req, res) => {
        const CampaignHistory = await CampaignHistoryService.getAll()
        res.status(200).json({
            success: true,
            data: CampaignHistory
        })
    },
    getCampaignHistoryById: async (req, res) => {
        const { id } = req.params
        const CampaignHistory = await CampaignHistoryService.getOne(id)
        res.status(200).json({
            success: true,
            data: CampaignHistory
        })
    },
    createCampaignHistory: async (req, res) => {
        const { CampaignHistory_model, start_date_CampaignHistory, end_date_CampaignHistory } = req.body
        const created = await CampaignHistoryService.create({ CampaignHistory_model, start_date_CampaignHistory, end_date_CampaignHistory })

        res.status(201).json({
            success: true,
            data: created
        })
    },
    uppdatCampaignHistory: async (req, res) => {
        const { id } = req.params
        const { CampaignHistory_model, start_date_CampaignHistory, end_date_CampaignHistory } = req.body
        //const customer = await CustomersService.getOne(customer_id)
        const updated = await CampaignHistoryService.updateOne(id, { CampaignHistory_model, start_date_CampaignHistory, end_date_CampaignHistory })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteCampaignHistory: async (req, res) => {
        const { id } = req.params
        //const deleted = await CampaignHistoryService.deleteOne(id, { name, price })
        const deleted = await CampaignHistoryService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: deleted
        })  
    }
}

export default CampaignHistoryControllers