const express = require('express');
const Router = express.Router();
const homeSchema = require('../models/homeSchema');
Router.get('/',(err,res) => {
    res.render('index',{title : 'Enter your details',password:'',email : ''});
})
Router.post("/index",async(req,res) => {
    try{

        const {
            name,
            email,
            password
        } = req.body;
        const userData = new homeSchema({
            name,
            email,
            password
        })
        userData.save(err=>{
            if(err){
                console.log('error hai shi kr')
            }else{
                res.render('index',{title : 'Done',Password:'',Email : ''}); 
            }
        })
    }catch(error){
        res.render('/index',{title : 'please provide your credentials',Password:'',Email : ''});
    }
})
module.exports = Router;