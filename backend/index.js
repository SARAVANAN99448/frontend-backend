const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

let fruits = []

var user =[]
var pass =[]

app.post("/fruit", function (req, res) {
    const fruit = req.body.fruitname
    if (fruit) {
        fruits.push(fruit)
        console.log(fruits)
    }

})

app.post("/login", function (req, res) {
    for( var count=0;count<user.length;count++){
        if (user[count] === req.body.username && pass[count] === req.body.password) {
            res.send(true)
        }
        else {
            res.send(false)
        }
    }
})

app.post('/d',function(req,res){
    const customer= req.body.username
    const password = req.body.password
    if(customer){
        user.push(customer)
        console.log(user)
    }
    if(password){
        pass.push(password)
        console.log(pass)
    }
   
    
})

app.listen(5000, function () {
    console.log("Port Running 5000...")
})