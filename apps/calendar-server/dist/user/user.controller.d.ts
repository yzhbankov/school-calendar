import { UserService } from './user.service';
import { CreateUserDto } from './dto';
export declare class UserController {
    private readonly appService;
    constructor(appService: UserService);
    saveUser(createUserDto: CreateUserDto): Promise<string>;
    readUser(): Promise<string>;
}
