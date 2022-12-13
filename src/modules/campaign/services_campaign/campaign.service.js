import CampaignModel from "../models_campaign/campaign.schema.js"

const CampaignService = {
    create: (payload) => {
        return new CampaignModel(payload).save()
    },
    getAll: (query) => {
        return CampaignModel.find(query)
    },
    getOne: (id) => {
        return CampaignModel.findOne({ _id: id })
    },
    updateOne: (id, payload) =>{
        return CampaignModel.findOneAndUpdate({ _id: id } , { $set: payload } )
    },
    deleteOne: (id, payload) => {
        return CampaignModel.findOneAndDelete({ _id: id })
    }
}

export default CampaignService