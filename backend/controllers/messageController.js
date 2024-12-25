export const sendMessage =async (req,res)=>{
    try{
        con
    }
    catch(error){
        console.log("Error in message controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}
