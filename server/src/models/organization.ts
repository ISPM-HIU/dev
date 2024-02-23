import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const model = {
    getAll: async () => {
        let result = await prisma.organization.findMany()
        return result
    },
    getOne: async (id : number) => {
        let result = await prisma.organization.findUnique({
            where: { id: Number(id) },
        })
        
        return result 
    },
    getByEmail: async (email : string) => {
        let result = await prisma.organization.findUnique({
            where: { email: String(email) },
        })

        return result
    },
    search: async (query : string, id:number) => {

        let result = await prisma.organization.findMany({
            where: {
                NOT: {
                    id: id,
                },
                OR: [
                    {
                        email: { contains: query }
                    },
                    {
                        name: { contains: query }
                    },
                    {
                        location: { contains: query }
                    }
                ]
            }
        })

        return result
    },
    create: async (name: string, email: string, password: string, location: string, number: string) => {

        const result = await prisma.organization.create({
            data: {
                name, 
                email, 
                password, 
                location,
                number
              },
        })

        return result
    },
    delete: async (id : number) => {

        let result = await prisma.organization.delete({
            where: { id: Number(id) },
        })

        return result
    },
}

export default model