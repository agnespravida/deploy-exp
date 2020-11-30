const { Data } = require("../models/index.js")
class Controller {
  static showAll(req, res){
    Data.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari showAll")
        res.status(500).json(err)
      })
  }
  static addData(req, res){
    let newData = {
      name: req.body.name,
      description: req.body.description
    }

    Data.create(newData)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        console.log(err.message + " <<< ini dari findAll")
        res.status(500).json(err)
      })
  }
}

module.exports = Controller