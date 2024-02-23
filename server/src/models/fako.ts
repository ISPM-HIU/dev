import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const model = {
    getAll: async () => {
        let result = await prisma.fako.findMany()
        return result
    },
    getOne: async (id : number) => {
        let result = await prisma.fako.findUnique({
            where: { id: Number(id) },
        })
        
        return result 
    },
    create: async (
        name: string ,
        location: string,
        isValid: boolean,
        qrCode: string
    ) => {
        const result = await prisma.fako.create({
            data: {
                name,
                location,
                isValid,
                qrCode 
              },
        })

        return result
    },
    update: async (
        name: string | undefined,
        location: string | undefined,
        isValid: boolean | undefined,
        qrCode: string | null | undefined,
        id:number | undefined
    ) => {

        const result = await prisma.fako.update({
            where: { id: Number(id) },
            data: {
                name ,
                location,
                isValid,
                qrCode,
                id
            },
        })

        return result
    }
}

export default model