import { Response, Request } from "express"
import { generateToken } from '../services/services'
import model from "../models/signal"
import fakoModel from "../models/fako"

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
            fakoId ,
            userId
        } = req.body

        try {
            let fako = await fakoModel.getOne(fakoId)
            let udapteFako = await fakoModel.update(
                fako?.name,
                fako?.location,
                true,
                fako?.qrCode,
                fako?.id
            )
            if(udapteFako) {
                let response = await model.create(
                    parseInt(fakoId),
                    parseInt(userId),
                )
                if(response) {
                    res.status(200).send(response)
                }
            }
            else res.status(500).send("Send signal failed")
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
}

export default controller