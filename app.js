const express = require('express');
var users = require('./routes/users');
var states = require('./routes/states');
const app = express();
const port = process.env.PORT || 3000;


app.use('/users', users);
app.use('/states', states);


// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
// http://localhost:3000/book/novel/rate/2000
//http://localhost:3000/novel-2000

app.get('/:book-:rate', (req, res) => {
    res.send(req.params)
})


// Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.

// app.get('/flights/:from', (req, res) => {
//     res.send(res.params)
// })

// Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }



app.listen(port, (req, res) => {
    console.log("Express api port is up and runnig")
})
