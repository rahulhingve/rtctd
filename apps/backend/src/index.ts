import express from "express"

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.json({
        msg:"hiiiiiiiiiiii"
    })
})

app.listen(3001);