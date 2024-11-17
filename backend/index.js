const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const empModel=require('./employeeModel')
require('dotenv').config()


const app=express()
app.use(express.json())

app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello")
})

mongoose.connect(process.env.MONGODB_URL)

app.post('/register',(req,res)=>{
    empModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>console.log(err))
})

app.listen(process.env.PORT,()=>{
    console.log("server is runing");
})

//login

app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    employeeModel.findOne({emial:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json('success')
        }
        else{
            res.json('password is incorrrect')
        }
       
    }
    else{
         res.json('no records')   
    }
})
})