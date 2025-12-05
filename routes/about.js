var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('about', { title: 'Downtown Donuts: About Us'});
});

module.exports = router;