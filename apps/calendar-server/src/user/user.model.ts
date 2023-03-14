import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export class User {
    async save(body: any): Promise<any> {
        return prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
            },
        })
    }

    async read(): Promise<any> {
        return prisma.user.findMany()
    }
}
