//create a module called express
const express=require('express')
//create an object for express module
const app=express()

const PORT=process.env.PORT||4000;

const bodyParser=require('body-parser')
app.use(bodyParser.json())

app.route('/users').get((req,res)=>{
    res.send('You are viewing user page')
})

app.route('/movies').get((req,res)=>{
    res.send('Your movies are listed here')
})

app.get('/', function(req, res){
    res.send({
        status:200,
        message:"welcome to new server of Suhas"
    })
})

app.post("/", (req,res)=>{
    console.log(req.body)
    res.send({
        status:200,
        message:"Data successfully send, you can check"
    })
})

//make a server listner on port number
app.listen(PORT,()=>{
    console.log("Running in port number:",PORT)
})