import { Response, Request } from "express"
import { generateToken } from '../services/services'
import model from "../models/fako"

const controller = {
    getAll: async (req: Request, res: Response) => {
        try {
            let data = await model.getAll()

            if(data)
                res.status(200).send(data)
            else
                res.status(200).send([])
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    getOne: async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)

        try { 
            let data = await model.getOne(id)
           
            if(data)
                res.status(200).send(data)
            else
                res.status(200).send({})
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    create: async (req: Request, res: Response) => {
        let { 
            name ,
            location,
            isValid,
            qrCode 
        } = req.body

        try {
            let response = await model.create(
                name ,
                location,
                isValid,
                qrCode 
            )
            if(response) {
                res.status(200).send(response)
            }
            else res.status(500).send("Registration failed")
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    update: async (req: Request, res: Response) => {
        let {  
            name ,
            location,
            isValid,
            qrCode 
        } = req.body
        let id = parseInt(req.body.id)
        try { 

            let data = await model.update( 
                name ,
                location,
                isValid,
                qrCode,
                id
            )
            res.status(200).send(data)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
}

export default controller