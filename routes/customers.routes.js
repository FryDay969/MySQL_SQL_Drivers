const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));



const Customer = require('../models/customers.model');

module.exports = app =>{
    app.get(/\/customer\/([0-9]+)/, (req,res) => {
        let idFromUrl = req.params.id;
        Customer.getbyId(idFromUrl, (err,result) =>{
            if(err){
                throw err
            }
            if(result){
                res.send(result)
            }
        })
    })
    app.post(/\/customer\/new/, (req,res) => {
        let newCustomerId = req.body.id;
        let newCustomerName = req.body.name;
        let newCustomerLastName = req.body.lastname;
        Customer.postCustomer(newCustomerId,newCustomerName,newCustomerLastName, (err,result) =>{
            if(err){
                throw err
            }
            if(result){
                res.send(result)
            }
        })
    })
    app.patch(/\/customer\/([0-9]+)/, (req,res) => {
        let newCustomerName = req.body.name;
        let newCustomerLastName = req.body.lastname;
        let idFromUrl = req.params.id;
        Customer.updateInfo(newCustomerName, newCustomerLastName,idFromUrl, (err,result) =>{
            if(err){
                throw err
            }
            if(result){
                res.send(result)
            }
        })
    })
    app.delete(/\/customer\/([0-9]+)/, (req,res) => {
        let idFromUrl = req.params.id;
        Customer.deleteCustomer(idFromUrl, (err, result) => {
            if (err) {
                throw err
            }
            if (result) {
                res.send(result)
            }
        })
    })
};


