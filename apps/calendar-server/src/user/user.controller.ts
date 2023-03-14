import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from "./user.service";
import { CreateUserDto } from './dto';

@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Post()
    async saveUser(@Body() createUserDto: CreateUserDto): Promise<string> {
        return this.appService.save(createUserDto)
    }

    @Get()
    async readUser(): Promise<string> {
        return this.appService.read()
    }
}
