const mongoose =  require('mongoose');


const  nkwCateringExpDetailSchema = mongoose.Schema({
    title: String,
    logos:[],
    imgs: [],
    context: {
        p: [],
        sub_title: [],
        li_all: []
    }
})


module.exports = mongoose.model('nkwCateringExpDetail', nkwCateringExpDetailSchema);