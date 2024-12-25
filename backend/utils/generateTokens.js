import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = async(userId, res)=>{
    const token=await jwt.sign(
        {userId}, process.env.JWT_SECRET, {expiresIn:"15d"}
    )
    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000,
        httpOnly:true, //prevent the XSS attack cross-site scripting attacks
        sameSite:"strict", //CSRF attacks cross-site request forgery,
        secure:process.env.NODE_ENV!=="development"
    })
}

export default generateTokenAndSetCookie
