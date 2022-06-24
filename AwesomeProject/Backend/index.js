const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser')
const mongoose = require('mongoose');


require('./Users')
require('./Service')
const Users = mongoose.model("Users")
const Service = mongoose.model('Service')

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

app.get('/user-recodrs/:id', (req, res) => {
    console.log(req.params.id)
    Users.find(req.params.id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    }) 
})


//get service data bu user id
app.get('/service-recodes/:userId', (req, res) => {
    console.log(req.params.userId)
    Service.find({userId: req.params.userId})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    }) 
})


app.post('/login', async(req , res) => {
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
                    })
                }
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


// avail service or hire ustaad
app.post('/avail-service', async(req, res) => { 
    const service = new Service({
            userId, 
            field, 
            problemStatement, 
            latitude, 
            longititude, 
            ustaadId, 
            date, 
            email, 
            _name, 
            phone, 
            address} = req.body)
            service.save()
    .then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
})


//api find ustaad where role == ustaad
app.get('/ustaadlist', async(req, res) => { 
    Users.find({role: "ustaad"}).then(data=>{
        console.log(data)
        res.send(data)
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
