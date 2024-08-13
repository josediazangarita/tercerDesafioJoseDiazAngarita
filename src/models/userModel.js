import mongoose from 'mongoose';

const userCollection = "users";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        minLength: 3,
        default: ''
    },
    last_name: {
        type: String,
        minLength: 3,
        required: false
    },
    email: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        minLength: 3,
        required: true
    },
    role: {
        type: String,
        enum:['user', 'admin', 'premium'],
        required: false,
        default: 'user'
    },
    githubId: {
        type: String,
        required: false
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts',
        required: false
    },
    documents: [
        {
            name: {
                type: String,
                required: true
            },
            reference: {
                type: String,
                required: true
            }
        }
    ],
    profileImages: [
        {
        name: { type: String },
        reference: { type: String }
        }
    ],
  productImages: [
        {
        name: { type: String },
        reference: { type: String }
        }
    ],
    last_connection: {
        type: Date,
        default: null
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;