import {Schema, model} from 'mongoose'

const storeSchema = new Schema({
    name: String,
    category: String,
    information: String,
    phone: String,
    location: String,
    imgUrl: String
},{
    versionKey: false,
    timestamps: true
})

export default model('Store', storeSchema);