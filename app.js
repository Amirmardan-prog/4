const express = require('express')
const bp = require('body-parser')

app = express()
app.use(bp.urlencoded({extended:true}))
app.use(express.static(__dirname +'/public'))
app.set("view engine", "ejs")

let generalTask = []
let workList = []
var listName //= 'general'

let today = new Date()
let date = today.toJSON().slice(0,10)

app.post("/", (req, res)=>{
  let list = req.body.button

  if (list==='general'){
    generalTask.push(req.body.newTask)
    res.redirect("/")
  }else if(list==='work'){

    workList.push(req.body.newTask)
    res.redirect("/work")
  }

})



app.get("/work", (req, res)=>{
  listName = 'work'
  res.render("index", {title:listName, date:date, newTask:workList})
})

app.get("/", (req, res)=>{
listName = 'general'
  res.render("index", {title:listName, date:date, newTask:generalTask})
})

app.get("/aboutme", (req, res)=>{
  res.render('aboutme', {date:date, title:"About me"})
})



app.listen(process.env.PORT || 3000, ()=>{
  console.log("server is running")
})
