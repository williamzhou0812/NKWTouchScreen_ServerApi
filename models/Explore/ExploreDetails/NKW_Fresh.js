const mongoose =  require('mongoose');


const  nkwFreshExpDetailSchema = mongoose.Schema({
    title: String,
    logos:[],
    imgs: [],
    context: {
        p: [],
        sub_title: [],
        li_all: []
    }
})


module.exports = mongoose.model('nkwfreshexpdetail', nkwFreshExpDetailSchema);