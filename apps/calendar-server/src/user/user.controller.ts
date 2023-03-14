import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { User } from './entity/user.entity';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) {}

    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 422, description: 'Validation error.' })
    @Post()
    async saveUser(@Body() createUserDto: CreateUserDto): Promise<string> {
        return this.appService.save(createUserDto)
    }

    @ApiResponse({ status: 200, description: 'The found events', type: [User] })
    @Get()
    async readUser(): Promise<string> {
        return this.appService.read()
    }
}
