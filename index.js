import "babel-polyfill"
import connect from "./model/connect"
import route from "./controller/mergeroute"
const bodyPraser=require("body-parser")
const path = require("path")
connect.connect()
const session=require("express-session")
const cookieparser=require("cookie-parser")
const server=require("express")
const app=server()
// session
app.use(cookieparser())
app.use(session({
    secret:"abc",
    resave:true,
    saveUninitialized:true,
    cookie:{maxAge:360000}
}))
// use of body praser
app.use(bodyPraser.json())
app.use(bodyPraser.urlencoded({extended:true}))

// setup viwe engine hbs
app.set("view engine","hbs")
app.set("views",path.join(__dirname,"view"))





// route comming 
app.use(route.route)



// health check
app.get('/',(req,resp)=>{
    resp.send("all good")
})
app.listen(process.env.port||2000,()=>{
    console.log("listing at port ",process.env.port||2000)
})