const shorturl = require('shortid')
const URL = require('../Models/url')


async function GenerateShortURL(req, res){
    const body= req.body
    if(!body.url){
        return res.status(400).json({error: "url was not entered"})
    }
    const shortID = shorturl()
     await URL.create({
        Short_id : shortID,
        Redirect_url : body.url,
        Visit_history : []
     });

     return res.json({outputID : shortID})
} 
module.exports = {
    GenerateShortURL
};