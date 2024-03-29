import express from 'express'
import { user as User } from '../Model/users.js';
import bcrypt from 'bcrypt'

let router = express.Router()
//code

router.get('/allusers', async(req,res)=>{
    try {
        
        let users = await User.find()
        console.log(users)
        return res.status(200).json(users)
    } catch (error) {
        console.log(error.message)
        return res.status(500).send("Internal Server Error")
    }
})

router.post('/adduser', async(req,res)=>{
    try {
        let existingUser = await User.findOne({email: req.body.email})
        if(existingUser) {
            return res.status(409).json('User already Exists')
        }
        //generate encrypted password using bcrypt. 

        let salt = await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hash(req.body.password,salt)
        let roleAssign = req.body.role
        let userRole;
        if(!roleAssign){
userRole = "User"
        }else{
            userRole = req.body.role
        }

        let newUser = await new user({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            role: userRole,



            

        }).save()


        console.log(newUser)
        return res.status(200).json({ user: newUser, message: 'User Added Successfully ✅' })


    } catch (error) {
        console.log(error.message)
        return res.status(500).send("Internal Server Error")
        
    }
})

router.post('/login', async(req, res)=>{
    let user = await User.findOne({email: req.body.email})
    console.log(user);

    try {
        if(!user){
            return res.status(400).json({message: "User not found"})
}
//validate password

let validatePassword = await bcrypt.compare(req.body.password, user.password)
if(!validatePassword){
    return res.status(400).json({message: "invalid credentials"})
}



return res.status(200).json({message: 'login successful'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal error'})
    }
})













//export to other
export let authRouter = router;