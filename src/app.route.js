import express from 'express'
import CustomersRouter from './modules/customers/customers.route.js'
import OrderHistoryRouter from './modules/history/history.route.js'
import CampaignRouter from './modules/campaign/campaign.route.js'

const AppRouter = express()

AppRouter.use('/customers', CustomersRouter)
AppRouter.use('/history', OrderHistoryRouter)
AppRouter.use('/campaign', CampaignRouter)
AppRouter.use('/campaign_history', CampaignRouter)

export default AppRouter