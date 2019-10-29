const mongoose = require('mongoose');


const NKWFreshSchema = mongoose.Schema({
        title: String,
        logo: String,
        imgs: [{type: String}],
        content: [{type: String}],
        contact: [
            {
                phone_a: String,
                phone_b: String,
                email: String
            }
        ]
})



module.exports = mongoose.model('nkw_fresh', NKWFreshSchema )
