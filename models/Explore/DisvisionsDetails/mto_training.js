const mongoose = require('mongoose');


const MTOTrainingSchema = mongoose.Schema({

    title: String,
    logo: String,
    contact: {
        phone_a: String,
        phone_b: String,
        website: String,
        email: String
    },
    context: [],
    li_a: [],
    li_b: [],
    li_c: [],
    li_d: []
});


module.exports = mongoose.model('mtotraining', MTOTrainingSchema);