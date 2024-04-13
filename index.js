const express = require("express");
const urlroute = require('./Routes/url')
const {connectMongo} = require('./connect')
const URL = require('./Models/url')

const app = express();
const port = 8000;

connectMongo("mongodb://localhost:27017/short-url")
.then(() => console.log("Mongo connected")
);

app.use(express.json())

app.use('/url', urlroute)

app.get('/:Short_id', async (req,res)=>{
    const Short_id = req.params.Short_id;
    const ent = await URL.findOneAndUpdate(
    {Short_id} 
    ,{$push : {
        Visit_history :{
            timestamp : Date.now()
        }
    }
    })
    res.redirect(ent.Redirect_url)
})

app.get('/analytics/:Short_id' , async(req,res)=>{
    const Short_id = req.params.Short_id;
    const result = await URL.findOne({Short_id})
    res.json( {Clicks: result.Visit_history.length})
})


app.listen(port , ()=> console.log(`server started successfully at port ${port}`))