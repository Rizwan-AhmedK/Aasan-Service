const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser')
const mongoose = require('mongoose');


require('./Users')
const Users = mongoose.model("Users")

app.use(bodyParser.json())

const mongoUri = "mongodb+srv://aasanservice:hello123@cluster0.9ds66.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(mongoUri, {
    useNewUrlParser:true
})

mongoose.connection.on("connected", () => {
    console.log("connected")
})

mongoose.connection.on("error", (err) => {
    console.log("error while connecting", err)
})

app.get('/fetch', (req, res) => {
   const {_id} = req.body;
    Users.findById({_id}).then(data => {
        res.send(data)
    })
})

app.post('/login', (req , res) => {
    const {email, pass} =  req.body;

    Users.findOne({email}).then(data => {
        if(!data){return res.status(404).json({message: "User not Found"});}
        else{
            bcrypt.compare(pass, data.pass, (err, compareRes) => {
                if(err) {res.status(502).json({message: "Error your message "});}
                else if (compareRes) {
                    res.status(200).json({
                        success: true,
                        data
                    })}
                else {
                    res.status(401).json({message: "invalid creditional" , success: false,  compareRes});
            }})
        }
    }).catch(err => {
        console.log(err)
        res.status(400).json({
            success: false,
        })
    }) 
})

app.post('/usersignup', async(req, res) => { 
    const {pass, repass, email} = req.body;
    const password = await bcrypt.hash(pass, 10)
    const repassword = await bcrypt.hash(repass, 10)

    const existUsername = await Users.findOne({ email });
   if (existUsername) {
     res.send('User already exists');
   }
   else{
    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        pass:password,
        repass:repassword,
        role:req.body.role,
        phone:req.body.phone,
        city:req.body.city,
        frontCNIC:req.body.frontCNIC
        })
    user.save()
    .then(data=>{
        console.log(data)
        res.send("saved")
    }).catch(err=>{
        console.log(err)
    })
}
})





app.post('/ustaadsignup', async(req, res) => { 
    const {pass, repass} = req.body;
    const password2 = await bcrypt.hash(pass, 10)
    const repassword2 = await bcrypt.hash(repass, 10)
    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        pass:password2,
        repass:repassword2,
        role:req.body.role,
        phone:req.body.phone,
        city:req.body.city,
        field:req.body.field,
        about:req.body.about,
        frontCNIC:req.body.frontCNIC })
    user.save()
    .then(data=>{
        console.log(data)
        res.send("saved")
    }).catch(err=>{
        console.log(err)
    })
})



app.post('/delete', (req,res) => {
    Users.findByIdAndRemove(req.body.id)
    .then(data => {
        console.log(data)
        res.send("deleted")
    })

    .catch(err => {
        console.log(err)
    })
})
 

app.post('/update', (req,res) => {
    Users.findByIdAndUpdate(req.body.id, {
        name:req.body.name,
        email:req.body.email,
        pass:req.body.pass,
        repass:req.body.repass,
        role:req.body.role
    }).then(data => {
        console.log(data)
        res.send("Updated")
    })

    .catch(err => {
        console.log(err)
    })
})


app.listen(3000, () => {
    console.log('server running')
})










