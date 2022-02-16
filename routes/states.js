var express = require('express');

var router = express.Router();

const stateObj = {
    states: [
      {
        name: "Alabama",
        abbreviation: "AL"
      },
      {
        name: "Alaska",
        abbreviation: "AK"
      },
      {
        name: "American Samoa",
        abbreviation: "AS"
      },
      {
        name: "Arizona",
        abbreviation: "AZ"
      },
      {
        name: "Arkansas",
        abbreviation: "AR"
      }
    ]
  };

// router.use('/', (req, res) => {
//     res.send("GET request for states")
// });

router.get('/getState', (req, res) => {
    res.send(stateObj);
});

module.exports =  router;