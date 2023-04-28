const express = require('express')
var cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}));


app.get('/api',(req,res) => {
    res.json({"users":['1','2']})
})

app.post('/otp/verify',(req,res) => {
    let body = req.body.otp.filter(e=>e)
    if(req.body === undefined || req.body === '' || body.length !=6 ){
        console.log(req.body)
        return res.status(500).json("Failed");
    }
    return res.status(200).json("Success");
})

app.listen(50000,() => {console.log("server started at 5000")})
