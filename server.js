const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));




//app.locals.myBudget = require('./budget_1.JSON');

 //const myBudget =require( './budget_1.JSON' );
//  const budget =
// {
//    myBudget: [
//     {
//         title: 'Eat out',
//         budget: 25
//     },
//     {
//         title: 'Rent',
//         budget: 375
//     },
//     {
//         title: 'Grocery',
//         budget: 110
//     },
//     {


//     title: 'gas',
//     budget: 30
//     },
//     {
//         title: 'hair cut',
//         budget: 20
//   },
//   {
//     title: 'Netflix',
//     budget: 18
// },
// {
//     title: 'Car Wash',
//   budget: 40
// }
// ]
// };


app.get('/hello',(req, res) =>{
    res.send('Hello World');
});


app.get('/budget', (req, res) =>{
    
    var fs = require('fs');
    const myBudget = fs.readFileSync('./budget_1.JSON');
    const budget = JSON.parse(myBudget);
    res.json(budget);

});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
  