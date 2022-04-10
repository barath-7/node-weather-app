require('dotenv').config()
const request = require('postman-request');
const {URL} = process.env


request(URL,(err,res)=>{
    let data = JSON.parse(res)
    console.log(data.current)
})