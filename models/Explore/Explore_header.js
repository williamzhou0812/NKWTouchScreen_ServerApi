const  mongoose = require('mongoose');


 /// Static model 

const  ExploreheaderSchema = mongoose.Schema({
    
     exp_title: String,
     sub_exp_title: String
    
});




module.exports = mongoose.model('exploreheader', ExploreheaderSchema);