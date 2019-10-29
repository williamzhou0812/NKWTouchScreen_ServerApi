const  mongoose = require('mongoose');


 /// Static model 

const  DisvisionsHeaderSchema = mongoose.Schema({
    
     dis_title: String,
     sub_dis_title: String
    
});




module.exports = mongoose.model('disvisionsheader', DisvisionsHeaderSchema);