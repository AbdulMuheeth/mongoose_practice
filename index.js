const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
const env = require('dotenv')
const app = express()

app.use(bodyParser.json())
require('dotenv').config()

// home
app.get('/',(req,res)=>{
    res.send("hello world")
})

// add a user
app.post('/addUser', async (req,res)=>{
    
    console.log(req.body);

    const user = new User({
        name : req.body.name,
        email : req.body.email,
        phoneNumber : req.body.phoneNumber
    })

    console.log(user);

    await user.save();
    res.send('User details add successfully')

})


//update user

app.get('/update/:name',(req,res)=>{ 
    // accessing name of the user as params

    let uname = req.params.name
    User.findOne({name:uname},(err,foundUser)=>{
        console.log(foundUser);
    })

        
    // User.updateOne({name:uname},{updated:true},(err)=>{
    //     if (err)
    //         console.log("error occurred while updating ")
    // })


    res.send("updated")

})



mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
        console.log("Database connected!")}).catch(err => console.log("er1"+err));


app.listen(3000,()=>{
    console.log('Server is up and listening at port : 3000')
})