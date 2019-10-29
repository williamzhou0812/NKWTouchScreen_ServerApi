const  mongoose = require('mongoose');


const PNGCommericalVehiclesSchema = mongoose.Schema({
    title: String,
    logo: String,
    contact: { 
        name: String,
        job: String,
        phone_a: String,
        email: String,
        location: String
    },
    context: []
    
});


module.exports  = mongoose.model('png_commerical_vehicles', PNGCommericalVehiclesSchema )