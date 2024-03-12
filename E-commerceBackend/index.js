require('dotenv').config();
const express  = require('express')
const cors = require('cors');
const PORT = 5000;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
const user_model = require('./models/user.models')
app.use(bodyParser.json())
require('./src/config/db')

const user_routes = require('./Routes/user_routes')
app.get("/",()=>{
    console.log("i am running")
})
app.use('/api',user_routes)
app.listen(PORT,()=>{
    console.log("i am running at",{PORT})
})