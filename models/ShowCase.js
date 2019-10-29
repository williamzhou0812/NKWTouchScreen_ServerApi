const mongoose = require('mongoose');

const ShowCaseSchema = mongoose.Schema({
    title: String,
    video: String,
    poster_img:String,
    sliders: String,
    bannerImg: String
    // videos: {
    //     video_one: String,
    //     video_two: String,
    //     video_three: String
    // },
    // sliders: {
    //     slider_one: String,
    //     slider_two: String,
    //     slider_three: String
    // },
    // bannerImg: String
});

module.exports = mongoose.model('showcase', ShowCaseSchema);