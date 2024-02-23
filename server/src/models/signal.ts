import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const model = {
    getAll: async () => {
        let result = await prisma.signal.findMany({
            orderBy: {
                id: "desc"
            }
        })
        return result
    },
    getOne: async (id : number) => {
        let result = await prisma.signal.findUnique({
            where: { id: Number(id) },
        })
        
        return result 
    },
    create: async (
        fakoId : number,
        userId: number
    ) => {
        const result = await prisma.signal.create({
            data: {
                fako: {
                    connect: {
                        id: fakoId
                    }
                },
                user: {
                    connect: {
                        id: userId
                    }
                },
                
            },
        })

        return result
    },
}

export default model