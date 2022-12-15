import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String
    },
    branch: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Please provied a password']
     },

    addmissionDate: {
        type: String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
})


export default mongoose.model('student', studentSchema);