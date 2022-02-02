import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, unique: true, required: true }
    },
    { collection: "userData" }
)

const userModel = mongoose.model('userData', UserSchema)

export default userModel