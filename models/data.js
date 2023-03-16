const mongoose = require("mongoose")
const express = require('express')
const app = express()


const UserSchema = new mongoose.Schema({ 
    profile: { 
        name: String, 
        email: String,
        phone: String
    }, 
    verified:{
        type : Boolean,
        default : false
    }
},
    { 
        timestamps: true
    }
)

module.exports = mongoose.model('User', UserSchema);