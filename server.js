const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')

const app = express();

// connect MongoDB
connectDB();

//Init Middleware
app.use(cors());
app.use(express.json({extended: false}));


// set public folder to serveic image and videos
app.use(express.static(__dirname + '/public/media'));


app.get('/', (req, res) => res.json({msg: 'Welcom to NKW CMS API ...'}));


// Define Routes

app.use('/api/header', require('./routes/header'));
app.use('/api/showcase', require('./routes/showcasemode'));
app.use('/api/about', require('./routes/about'));
app.use('/api/ourteam', require('./routes/ourteam'));
app.use('/api/exploreheader', require('./routes/explore/explore_header'));
app.use('/api/explorelanding', require('./routes/explore/explore_landing'))
app.use('/api/disvisions', require('./routes/explore/disvisions'));
app.use('/api/disvisionsheader', require('./routes/explore/disvisions_header'));
app.use('/api/contents', require('./routes/explore/contents'));


// improt each sub details router 
app.use('/api/nkwfreshdetails', require('./routes/explore/disvisionsDetails/nkw_fresh'));
app.use('/api/expacpng', require('./routes/explore/disvisionsDetails/expac_png'));
app.use('/api/qps', require('./routes/explore/disvisionsDetails/qps'));
app.use('/api/hiddenvalley', require('./routes/explore/disvisionsDetails/hidden_valley'));
app.use('/api/nkwcatering', require('./routes/explore/disvisionsDetails/nkw_catering'));
app.use('/api/mountaincoffee', require('./routes/explore/disvisionsDetails/mountain_coffee'));
app.use('/api/pngcommericalvehicles', require('./routes/explore/disvisionsDetails/png_commerical_vehicles'));
app.use('/api/aps', require('./routes/explore/disvisionsDetails/aps'));
app.use('/api/jet', require('./routes/explore/disvisionsDetails/jet'));
app.use('/api/mtotraining', require('./routes/explore/disvisionsDetails/mto_training'));
app.use('/api/pcs',require('./routes/explore/disvisionsDetails/pcs'));
app.use('/api/nkwbuilding', require('./routes/explore/disvisionsDetails/nkw_building'));


// route for explore Detail
app.use('/api/nkwcateringexpdetail', require('./routes/explore/exploreDetails/nkw_catering'));
app.use('/api/logisticstranport', require('./routes/explore/exploreDetails/logistics_transport'));
app.use('/api/nkwfreshexpdetail', require('./routes/explore/exploreDetails/nkw_fresh'));
app.use('/api/mtotrainingexpdetail', require('./routes/explore/exploreDetails/mto_training'));



const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`NKW_API Server run on Port ${PORT} `));