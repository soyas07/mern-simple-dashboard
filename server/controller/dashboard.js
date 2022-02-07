import dashboardModel from '../models/dashboard.js'
import userModel from '../models/user.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const getDashboard = async (req, res) => {
    const token = req.headers['x-access-token']
    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        
        const email = decode.user.email
        const user = await userModel.findOne({ email: email })
        
        if (user) {
            const getData = await dashboardModel.find()
            res.json({ status: 'ok', getData })
        } else {
            res.json({ status: 'error', error: 'Invalid Credentials' })
        }
    } catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'Ivalid Token' })
    }
}