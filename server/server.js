const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({"users": ["john", "sally", "alyssa", "dalan"]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})