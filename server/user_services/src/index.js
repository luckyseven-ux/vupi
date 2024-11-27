import express from "express"
import userRoutes from "./interfaces/router/userRoutes.js";
const app=express()
const port =3003;
app.use(express.json())

app.use('/user',userRoutes)

app.listen(port,()=>console.log(`server running on port ${port}`));