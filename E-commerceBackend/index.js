const express  = require('express')
const PORT = 5000;
const app = express();
require('./src/config/db')
app.use(express.urlencoded({extended:false}))
const user_routes = require('./Routes/user_routes')
app.get("/",()=>{
    console.log("i am running")
})
app.use('/',user_routes)
app.listen(PORT,()=>{
    console.log("i am running at",{PORT})
})