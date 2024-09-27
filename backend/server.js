const express  = require('express');
const mongoose =  require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.mongoURL)
.then(()=> {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 8000, (err) => {
        console.log("Running Successfull at", process.env.PORT);
    });
})
.catch((error) => {
    console.log("error", err);
});



app.get('/',  (req, res) => {
    res.send('Hello World!')
})
