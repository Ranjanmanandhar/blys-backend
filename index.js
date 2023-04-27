const express = require('express')
const app = express()

app.get('/api',(req,res) => {
    res.json({"users":['1','2']})
})

app.listen(50000,() => {console.log("server started at 5000")})
