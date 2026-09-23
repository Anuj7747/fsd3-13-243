import express from 'express'


const app = express()
app.get("/",(req,res)=>{
    res.end("<h1>hello Express</h1>")
})


app.listen(3333,()=>console.log("prg1 is running at 3333"));
