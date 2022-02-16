var express = require('express');

var router = express.Router();

router.use('/', (req, res) => {
    res.send("GET request for users")
});

module.exports =  router;