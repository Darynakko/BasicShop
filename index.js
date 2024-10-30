//setup
var express = require('express')
var ejs = require('ejs')

//create express app object
const app = express()
const port = 8000

//make ejs templating engine for express
app.set('view engine', 'ejs');

// Set up the body parser 
app.use(express.urlencoded({ extended: true })); 

// Load the route handlers
const mainRoutes = require("./routes/main.js");  
app.use('/', mainRoutes);

// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
