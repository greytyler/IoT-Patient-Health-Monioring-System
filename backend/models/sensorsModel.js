const mongoose = require('mongoose');


const NodeMcuDataSchema = new mongoose.Schema({
    temperature : {
        type : String,
        required : true,
    },

    pulseRate : {
        type : String,
        required : true
    }
});

const NodeMcuData = mongoose.model('NodeMcuData', NodeMcuDataSchema);
module.exports = NodeMcuData;