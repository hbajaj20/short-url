const mongoose = require("mongoose")

const urlschema = new mongoose.Schema({
    Short_id : {
       type : String,
       required : true,
        unique : true,
    },
    Redirect_url : {
        type : String,
        required : true,
    },
    Visit_history : [{
        timestamp : {
            type : Number
        }
    }]
});

const URL = mongoose.model("url",urlschema);

module.exports = URL ;