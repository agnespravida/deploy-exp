
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const Controller = require("./controllers/controllers.js")

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", Controller.showAll)
app.post("/", Controller.addData)


app.listen(port, () => {
  console.log("App listening on port " + port)
})