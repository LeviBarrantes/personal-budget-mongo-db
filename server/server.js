//Budget API
const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const app = express();
const port = 4000;
const budgetModel = require("../models/budget_schema");
let url = 'mongodb://localhost:27017/budget_1';
mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/',express.static('../public'));


app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/budget', (req, res) =>{
    
 mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true} )
  .then(() =>{
        console.log("Connected to the database")
        budgetModel.find({})
        .then((data)=>{
            console.log(data)
            res.json(data)
            mongoose.connection.close()
        })
  })
  .catch((connectionError)=>{
       console.log(connectionError)
      
  })
  
   
  
});

app.post('/add', (req, res) =>{
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true} )
     .then(() =>
     {
        console.log("post method")
        console.log(req.body.title)
         let newEntry = {
                
                 title:  req.body.title,
                 budget: req.body.budget,
                 color:  req.body.color,
         };
           budgetModel.insertMany(newEntry)
           .then((data)=>{
               res.json(data)
               mongoose.connection.close()
           })
     })
     .catch((connectionError)=>{
          console.log(connectionError)
         
     })
       
     
   });



app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
  });