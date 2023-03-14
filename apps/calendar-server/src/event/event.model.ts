import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export class Event {
    async save(body: any): Promise<any> {
        return prisma.event.create({
            data: {
                title: body.title,
                description: body.description,
                createdDate: new Date(),
                updatedDate: new Date(),
                timeFrom: new Date(),
                timeTo: new Date(),
                dateFrom: new Date(),
                dateTo: new Date(),
                userId: 1
            },
        })
    }

    async read(): Promise<any> {
        return prisma.event.findMany()
    }
}
