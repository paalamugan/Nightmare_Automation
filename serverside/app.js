var express = require('express');
var bodyparser=require('body-parser');
var cors=require('cors');
const Nightmare = require('nightmare')
var app = express();
app.use(cors({ origin: 'http://localhost:4200' }));



app.set('port',process.env.port || 8000);



app.use(bodyparser.json());

app.get('/',(req,res) =>{

res.send("hello");
})


app.post('/',(req,res) =>{
    var description=req.body.description;
    const nightmare = Nightmare({ show: true })

    nightmare
  .goto('http://localhost:4200/')
  .type('#description', description)
  .wait(2000)
  .evaluate(() => document.querySelector('#description').value)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
  res.status(200).json({message:"all is good"});
})




app.listen(app.get('port'),function(err,response){
    console.log("server is running on port",app.get('port'));
});

module.exports= app;


