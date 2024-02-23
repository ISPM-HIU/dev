import { Response, Request } from "express"
import { generateQR, generateToken, uploadFile } from '../services/services'
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
            name,
            location,
            isValid,
        } = req.body
        try {
            let response = await model.create(
                name,
                location,
                isValid
            )
            if(response) {
                let qr : any = await generateQR(response.id, response.location)
                let path = await uploadFile(qr, response.name)

                let update = await model.update(
                    response?.name,
                    response?.location,
                    true,
                    path,
                    response?.id
                )
                if(update) 
                    res.status(200).send(response)
                else res.status(500).send("Fako creation failed")
            }
            else res.status(500).send("Fako failed")
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
    delete: async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)
        console.log(id)
        try { 
            let data = await model.delete(id)
            res.status(200).send(data)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
}

export default controller