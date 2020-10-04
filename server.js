//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());







app.get('/budget', (req, res) =>{
    
    var fs = require('fs');
    const myBudget = fs.readFileSync('./budget_1.JSON');
    const budget = JSON.parse(myBudget);
    res.json(budget);

});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
  });