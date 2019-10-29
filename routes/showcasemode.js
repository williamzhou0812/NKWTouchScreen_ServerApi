// Show Case Mode Route
// DB Model _  allow to loop three videos, mutipitl sliders, and  one large bannar Image
// For now use Link to prsent data save 
// 

const  express = require('express');
const router = express.Router();
const ShowCase = require('../models/ShowCase');



//Todos:  Create Show Case Mode Router 


//Staic @Post

router.post('/', async (req, res) => {

    const {title, video, poster_img, sliders, bannerImg} = req.body;

    try {
        // save showcase data 

        showcase = new ShowCase({
            title: title,
            video: video,
            poster_img: poster_img,
            sliders: sliders,
            bannerImg: bannerImg

           //  bannerImg: 'http://nkwgroup.com/wp-content/uploads/2019/02/modsuccessbanner-19x10.jpg'
        });
        
        const showcase_res = await showcase.save();
        // const showcase_res = await ShowCase.find();
        res.json(showcase_res);
       // res.send('ShowCase Defaulte data Saved')
        
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }
});


//@GET 
router.get('/', async (req, res) => {
    try {
        const showcase = await ShowCase.find();
        res.json(showcase);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server ERROR')
    }
}); 

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const showcase = await ShowCase.findOne({_id:id});
        res.json(showcase);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server ERROR')
    }
}); 


//@Update 
router.put('/:id', async (req, res) => {

    const {title, video, poster_img, sliders, bannerImg} = req.body;

    const showCaseFields = {
        
        title: title,
        video: video,
        poster_img: poster_img,
        sliders: sliders,
        bannerImg: bannerImg

    };
   
    try {
        let showcase = await ShowCase.findById(req.params.id);

        showcase = await ShowCase.findByIdAndUpdate(
            req.params.id,
            {$set: showCaseFields},
            {new: true}
        );

        const showcase_res =  await ShowCase.find();

        res.json(showcase_res);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }
    
    // res.send('Show case mode put router working')
});

//@Delect 

router.delete('/:id', async (req, res) => {
    try {
        let showcase = await ShowCase.findById(req.params.id);

        if (!showcase) {
            return res.status(404).json({msg: 'showcase Data not Found'});
        }
        
        await ShowCase.findOneAndRemove(req.params.id);


        const showcase_res =  await ShowCase.find();

        res.json(showcase_res);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }
});

module.exports = router;