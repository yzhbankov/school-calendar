import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto';


const prisma = new PrismaClient()

@Injectable()
export class UserService {
    async save(user: CreateUserDto): Promise<any> {
        return prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
            },
        })
    }

    async read(): Promise<any> {
        return prisma.user.findMany()
    }
}
