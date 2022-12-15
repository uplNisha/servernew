import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    phone_Number:{
        type: Number
    },
    role:{
        type: String, 

    enum : ['user','admin'], 

    default: 'user'

    },
    email: {
        type: String,
        unique:true
    },
    password: {
        type: String,
        required: [true, 'Please provied a password']
     }
})


export default mongoose.model('user', userSchema);