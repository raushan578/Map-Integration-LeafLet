const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express(); 
app.use(express.json());
app.use(cors());
 app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );


require('./router/db/db')
app.use(require('./router/Auth'));
app.listen(3001,(req,res)=>{
    console.log(`Listening at 3001`);
})
