import {Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Post()
    async saveUser(): Promise<string> {
        return this.appService.save({ email: `${new Date().toISOString()}@gmail.com`, name: "Username" })
    }

    @Get()
    async readUser(): Promise<string> {
        return this.appService.read()
    }
}
