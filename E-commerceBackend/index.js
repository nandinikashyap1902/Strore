require('dotenv').config();
const express  = require('express')
const PORT = 5000;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const user_model = require('./models/user.models')
app.use(bodyParser.json())
require('./src/config/db')

const user_routes = require('./Routes/user_routes')
app.get("/",()=>{
    console.log("i am running")
})
app.use('/',user_routes)
app.listen(PORT,()=>{
    console.log("i am running at",{PORT})
})