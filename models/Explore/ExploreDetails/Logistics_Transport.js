const mongoose = require('mongoose');


const logisticsTransportSchema = mongoose.Schema({
    title: String,
    logo: String,
    imgs: [],
    context: {
        p: [],
        li_all: [],
        sub_title: []
    }
});




module.exports = mongoose.model('logisticstransportExpDetail', logisticsTransportSchema);