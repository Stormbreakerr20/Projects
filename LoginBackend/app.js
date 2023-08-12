import express from "express";
import { ConnectToMongo,JWT_SECRET } from "./db.js";
import { User } from "./Models/User.js";
import cookieParser from "cookie-parser";
import path from "path";
import bodyparser from "body-parser";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

const app = express();
ConnectToMongo();

app.use(express.urlencoded()) //It parses incoming requests with URL-encoded payloads and is based on a body parser
app.use(express.static(path.join(path.resolve(),"public")))

app.set('view engine', 'ejs')

app.use(cookieParser());


const fetchuser =async (req,res,next)=>{
    
    const {token} = req.cookies;
    
    if(token){
        const decoded = jwt.verify(token,JWT_SECRET);
        let user=await User.findById(decoded);
        res.render("Logout",{name:user.name});
    }
    else{
        next();
    }
}
app.get("/",fetchuser,(req,res)=>{
    res.render("Login")
})
app.get("/signup",fetchuser,(req,res)=>{
    res.render("SignUp")
})
app.get("/logout",async(req,res)=>{
    res.cookie("token",null,{
        httpOnly:true, // for secure
        expires: new Date(Date.now()) 
    })
    res.redirect("/");
})


app.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    
    let user = await User.findOne({email});

    if(!user){
        return res.render("SignUp");
    }
    const isMatch = await bcrypt.compare(password,user.password);
    console.log(isMatch);
    if(!isMatch){
        return res.render("Login",{errormessage:"Incorrect Password"})
    }

    const token = jwt.sign({_id:user._id},JWT_SECRET);

    res.cookie("token", token , { //can check cookie -> inspect->application
        httpOnly:true, // for secure
        expires: new Date(Date.now() + 600*1000) //will expire after 60 sec
    })
    res.redirect("/");
})

app.post("/signup",async (req,res)=>{
    const {name,email,password} = req.body;
    let user = await User.findOne({email});
    if(user){
        return res.render("Login");
    }
    const hashpassword = await bcrypt.hash(password,10)

    const usercreated = await User.create({name,email,password:hashpassword});

    const token = jwt.sign({_id:usercreated._id},JWT_SECRET);

    res.cookie("token", token , { //can check cookie -> inspect->application
        httpOnly:true, // for secure
        expires: new Date(Date.now() + 60*1000) //will expire after 60 sec
        })
    res.redirect("/");
})

app.listen('5000', ()=>{
    console.log("Server Started");
})


