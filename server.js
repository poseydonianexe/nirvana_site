const express = require("express")
const app = express()
// const ejs = require("ejs")

const port = 4000

app.set("view engine","ejs")


app.get("/",(req,res)=>{
    console.log("dsds")
    res.render("index")
    
})
app.listen(port,()=>{
    console.log("ehehhehe")
})