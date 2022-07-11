import express from "express";
const app = express()
const port = 3000
app.use(express.json())

import { tips } from "./src/controllers/controller.js";
tips(app)


app.listen(port, ()=>{
    console.log("Rodando na porta 3000, meu consagrado")
})