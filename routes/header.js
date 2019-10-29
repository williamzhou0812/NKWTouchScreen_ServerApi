const express = require('express');
const router = express.Router();
const Header = require('../models/Header');
const {check, validationResult} = require('express-validator');

router.post('/', async (req, res)  => {

   
   try {
        // Save at data to dbs
      header = new Header({
        logo_img: 'http://nkwgroup.com/wp-content/uploads/2019/02/NKW-Group-Header-Logo.png',
        nav_one: 'ABOUT',
        nav_two: 'EXPLORE',
        nav_three: 'CONTACt'
      }); 
    
      await header.save();
      res.send('Header Default Data Saved');
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server ERROR');
   }

});


//  @Route GET api/header 

router.get('/', async (req, res) => {

    try {
        const header = await Header.find();

        res.json(header);
        
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server ERROR');
    }

   
});


// Route Update Navbar Text

router.put('/:id', async (req, res) => {

    const {logo_img, nav_one, nav_two, nav_three} = req.body;
    const  headerFields = {};
    if (logo_img) headerFields.logo_img = logo_img;
    if (nav_one)  headerFields.nav_one = nav_one;
    if (nav_two) headerFields.nav_two = nav_two;
    if (nav_three) headerFields.nav_three = nav_three;

    try {
        let header = await Header.findById(req.params.id);

        if (!header) {
            return res.status(404).json({msg: 'Heade Data not Found'});
        }
        
        header = await Header.findByIdAndUpdate(
            req.params.id,
            {$set: headerFields},
            {new: true}
        );

        res.json(header);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }
  
});

// Router Delete Navbar content

router.delete('/:id', async (req, res) => {

    try {
        let header = await Header.findById(req.params.id);

        if (!header) {
            return res.status(404).json({msg: 'Heade Data not Found'});
        }
        
        await Header.findOneAndRemove(req.params.id);

        res.json({msg: 'Header Data by removed'});

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Serve ERROR');
    }

    
});

module.exports = router;