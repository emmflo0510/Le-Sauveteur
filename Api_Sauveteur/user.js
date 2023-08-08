const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    
    name :{type: String, required :true},
    firstname :{type : String , required: true} ,
    password :{type : String , required: true} ,
    email :{type : String , required: true},
    saviour :{type : Boolean , required: true} ,
    alerte :{type : Boolean , required: true}  ,
    blackliste :{type : Boolean , required: true} ,
    
})

class superUser extends user{
    constructor(name, firstname, password, email, saviour, alerte, allinterventions, history, blacklistacces ){
        super(name, firstname, password, email, saviour, alerte);
        allintervention : { type : String , required : true},
        history :{ type : String, required: true},
        blacklistacces: { type : String, required: true}
        
        // acces bdd
        }
}