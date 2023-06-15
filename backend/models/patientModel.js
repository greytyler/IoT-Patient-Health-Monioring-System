const mongoose = require('mongoose');

const patientSchema =  mongoose.model(
    "patients",
    mongoose.Schema({
        name : {
            type : String,
            required : true,
        },
        age : {
            type : Number,
            required : true
        },
        admitted : {
            type : String,
        },
        gender : {
            type : String,
            required : true
        },
        condition : {
            type: String,
            required  : true 
        },
        address : {
            type: String,
            required  : true
        },
        
        createdAt : {
            type : Date,
            default : Date.now()
        }
    })
)


module.exports = patientSchema;