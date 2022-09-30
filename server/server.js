const express = require('express')
const bodyParser = require('body-parser')
const { getUsers, getUserById, addOrUpdateUser, deleteUser } = require('./dynamo')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/users", async (req, res) => {
    try {
        const users = await getUsers()
        res.json(users)
    } catch (error) {
        console.error(err)
        res.status(500).json({err: "Something went wrong"})
    }
})

app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    try {
        const users = await getUserById(id)
        res.json(users)
    } catch (error) {
        console.error(err)
        res.status(500).json({err: "Something went wrong"})
    }
})

app.post("/users", async (req, res) => {
    const user = req.body
    console.log(user)
    try {
        const NewUser = await addOrUpdateUser(user)
        res.json(NewUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({err: "Something went wrong"})
    }
})

app.put("/users/:id", async (req, res) => {
    const user = req.body
    const id = req.params.id
    user.id = id
    try {
        const updatedUser = await addOrUpdateUser(user)
        res.json(updatedUser)
    } catch (error) {
        console.error(err)
        res.status(500).json({err: "Something went wrong"})
    }
})

app.delete("/users/:id", async (req, res) => {
    const id = req.params.id
    try {
        res.json(await deleteUser(id))
    } catch (error) {
        console.error(err)
        res.status(500).json({err: "Something went wrong"})
    }
})

app.listen(5000, () => {console.log("Server started on port 5000")})