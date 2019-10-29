const express = require('express');
const router = express.Router();

const Disvisions = require('../../models/Explore/Disvisions');



router.post('/', async (req, res) => {

    const {name, phone, email, logo, title_img, links, section_img_one, section_img_two, p1, p2, p3, p4, p5, p6, p7, p8} = req.body;

    try { 
        addDisvision = new Disvisions({
       
                name:  name,
                phone: phone,
                email: email, 
                logo:  logo,
                title_img: title_img,
                section_img_one: section_img_one, 
                Section_img_two: section_img_two,
                links: links,
                p1: p1,
                p2: p2,
                p3: p3,
                p4: p4,
                p5: p5,
                p6: p6,
                p7: p7,
                p8: p8
            
        });

        await addDisvision.save();
        const addDisvision_res = await Disvisions.find();
        res.json({addDisvision_res});

    } catch (err) {

        console.log(err.message);
        res.status(500). send('SERVER ERROR');
    }
    
});

// GET Route

router.get('/', async (req, res) => { 
    try { 
        const disvisions = await Disvisions.find();
        res.json(disvisions);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    } 
     
    //res.send('i am exproler get router');
});

// GET Single Disvisions  Data 

router.get('/:id', async (req, res) => {
    try { 
        const  id = req.params.id;
        const  getOneDisvison =  await Disvisions.findOne({_id: id});
        res.json(getOneDisvison);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.put('/:id', async (req, res) => {
    const {name, phone, email, logo, title_img, links, section_img_one, section_img_two, p1, p2, p3, p4, p5, p6, p7, p8} = req.body;

    const disvisionField = {
        
        name:name,
        phone: phone,
        name: name,
        email: email,
        logo: logo,
        title_img: title_img,
        links,
        section_img_one: section_img_one,
        section_img_two: section_img_two,
        p1:p1,
        p2:p2,
        p3:p3,
        p4:p4,
        p5:p5,
        p6:p6,
        p7:p7,
        p8:p8 
};

try {
    await Disvisions.findByIdAndUpdate(
        req.params.id,
        {$set: disvisionField},
        {new: true}
    )
   let  disvisions = await Disvisions.find();
        res.json(disvisions);
 } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
}


});



// @delet Roeuter
router.delete('/:id', async (req, res) => {
   

try {
    const disvisionID = await Disvisions.findById(req.params.id);

    if (!disvisionID) { 
        return res.status(404).json({msg: 'can not found in Disvision ID'});
    }
    
    await Disvisions.findByIdAndRemove(req.params.id);


     const disvisions = await Disvisions.find();
      res.json(disvisions);
   //  res.json({msg: 'data remove from Disvision'});

 } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
}


});







module.exports = router;