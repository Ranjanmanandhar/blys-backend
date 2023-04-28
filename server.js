const express = require('express')
var cors = require('cors')

const app = express()

app.use(cors({
    origin: 'https://blys-frontend.onrender.com/'
}));


app.get('/api',(req,res) => {
    res.json({"users":['1','2']})
})

app.post('/otp/verify',(req,res) => {
    return res.json("SUCCESS");
})

app.listen(50000,() => {console.log("server started at 5000")})
