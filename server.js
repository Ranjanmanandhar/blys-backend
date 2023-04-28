const express = require('express')
var cors = require('cors')

const app = express()

var corsOptions = {
    origin: 'https://blys-frontend.onrender.com/',
    optionsSuccessStatus: 200 
}

app.get('/api',cors(corsOptions),(req,res) => {
    res.json({"users":['1','2']})
})

app.post('/otp/verify',cors(corsOptions),(req,res) => {
    return res.json("SUCCESS");
})

app.listen(50000,() => {console.log("server started at 5000")})
