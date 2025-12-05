var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('menu', { title: 'Downtown Donuts: Menu'});
});

module.exports = router;