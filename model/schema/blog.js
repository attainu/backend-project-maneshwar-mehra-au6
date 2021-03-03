const mongoose=require("mongoose")

let Simage=mongoose.Schema({
    image:String
})

const blogSchema=mongoose.Schema({
    Blogtitle:String,
    image:[Simage],
    explain:String,
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    date:{
        type:Date,
        defaut:Date.now()
    },
    private:{
        type:String,
        default:"private"
    }
})

export let blog=mongoose.model("blog",blogSchema)