const mongoose = require('mongoose');


const ExplorelandingSchema = mongoose.Schema({
    exp_landing_img: String,
    exp_landing_title: String,
    exp_links: String
})


module.exports = mongoose.model('explorelanding', ExplorelandingSchema);