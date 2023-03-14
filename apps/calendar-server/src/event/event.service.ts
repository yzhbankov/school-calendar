import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

@Injectable()
export class EventService {
    async save(event: any): Promise<any> {
        return prisma.event.create({
            data: {
                title: event.title,
                description: event.description,
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
