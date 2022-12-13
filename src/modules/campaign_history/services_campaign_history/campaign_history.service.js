import CampaignHistoryModel from "../models_campaign_history/campaign_history.schema.js"

const CampaignHistoryService = {
    create: (payload) => {
        return new CampaignHistoryModel(payload).save()
    },
    getAll: (query) => {
        return CampaignHistoryModel.find(query)
    },
    getOne: (id) => {
        return CampaignHistoryModel.findOne({ _id: id })
    },
    updateOne: (id, payload) =>{
        return CampaignHistoryModel.findOneAndUpdate({ _id: id } , { $set: payload } )
    },
    deleteOne: (id, payload) => {
        return CampaignHistoryModel.findOneAndDelete({ _id: id })
    }
}

export default CampaignHistoryService