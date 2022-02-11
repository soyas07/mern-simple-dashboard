import userModel from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body
        const hashPass = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            firstName,
            lastName,
            email,
            password: hashPass
        })

        res.status(201).json({ status: 'ok', message: 'User Created', user})
    } catch (error) {
        res.json({ status: 'error', message: 'User Already Exist!' })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
       
        if(!user) res.json({ status: 'error', message: 'Invalid Credentials' })

        // check if the password is valid
        const isValidPass = await bcrypt.compare(password, user.password)

        if(isValidPass){
            const token = jwt.sign({user}, process.env.SECRET_KEY)
            return res.json({ status: 'ok', userToken: token, username: user.firstName })
        }
        else return res.json({ status: 'error', message: 'Invalid Credentials' })
    } catch (error) {
        console.log(error);
    }
}