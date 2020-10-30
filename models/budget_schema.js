const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
    
    title: {
        type: String,
        unique:true,
        required: true,
        
        
    },
    budget:{
            type:Number,
            unique:true,
            required: true,
           
        },
    color:{
        type: String,
        unique:true,
        require:true,
        minlength:6,
    }   

}, {collection: 'budget'})

module.exports = mongoose.model('budget', budgetSchema)