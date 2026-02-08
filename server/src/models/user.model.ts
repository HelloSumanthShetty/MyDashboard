import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true, 
        min :2,
        trim : true,
        max: 100,
    },
    email :{
        type: String,
        required: true,
        max: 100,
        unique: true,
    },
    password :{
        type: String,
        required: true, 
        min: 8,
    },
    city :{
        type: String,
        min :2,
        max: 100,
        trim : true,
    },
    state :{
        type: String,
        min :2,
        max: 100,
        trim : true,        

    },
    country :{
        type: String,       
        min :2,
        max: 100,
        trim : true,
    },
    occupation :{
        type: String,       
        min :2,
        max: 100,           
        trim : true,    
    },
    phone :{
        type: String, 
        min :10, 
        max: 15,    
        trim : true,    
    },
    transactions :{
        type: Array,
        default: [],
    },
    role :{
        type: String,
        enum: ["user", "admin", "superadmin"],
        default: "user",
    }

},{ timestamps: true});


const User = mongoose.model("User", userSchema);

export default User;