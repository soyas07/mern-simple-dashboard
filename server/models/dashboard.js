import mongoose from 'mongoose'

const dashboardSchema = new mongoose.Schema({}, { collection: 'dashboard' })

const dashboardModel = mongoose.model('Dashboard', dashboardSchema)

export default dashboardModel