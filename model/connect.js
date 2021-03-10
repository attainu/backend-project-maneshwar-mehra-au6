const mongoose=require("mongoose")
let mongoUri='mongodb://localhost:27017/blogs'

let connect=async()=>{
    try{
        await mongoose.connect(mongoUri,{ useUnifiedTopology: true , useNewUrlParser: true ,useFindAndModify: false})
        console.log("connected")
    }
    catch(e){
        console.log("connecting error in mongodb",e.message)
    }
}
export default{connect}




// "mongodb+srv://shubham-72:mondob1@cluster0.cieyx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"