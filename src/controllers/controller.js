import { Tip } from "../models/model.js";
import {bd} from "../infra/bd.js"

export const tips = (app)=>{
    app.post('/create', (req, res)=>{
        const body = req.body
        const newTip = new Tip(body.tip)
        bd.tips.push(newTip)
        res.send({"Dica": newTip})
    })
    
    app.get("/tips", (req, res)=>{
        res.send(bd.tips[Math.floor(Math.random()*bd.tips.length)])
    })
    
}
