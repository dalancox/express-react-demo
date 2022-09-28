const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.post("/form-post", (req, res) =>{
    console.log(req.body.name)
})

app.get("/api", (req, res) => {
    res.json({"users": ["john", "sally", "alyssa", "dalan"]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})