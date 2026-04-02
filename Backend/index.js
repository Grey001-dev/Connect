import express from "express"
import cors from "cors"
const app=express()

const port=3000;

app.use(cors({
  origin: "http://localhost:5174"
}));

app.get(("/backend"),(req,res)=>{
    res.json([{message: "Hello from backend"},
        {Grey:"Hell from Grey"}]
    )
})
app.post("/backend", (req, res) => {
    console.log(req.body); 
    res.status(200).send("Got it!");
});
app.listen(port,()=>{
    console.log(`Server on port 3000`)
})