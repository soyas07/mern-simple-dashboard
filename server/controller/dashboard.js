import dashboardModel from '../models/dashboard.js'

export const getDashboard = async (req, res) => {
    try {
        const getData = await dashboardModel.find()
        res.json(getData)
    } catch (error) {
        console.log(error);
    }
}