import { CreateUserDto } from './dto';
export declare class UserService {
    save(user: CreateUserDto): Promise<any>;
    read(): Promise<any>;
}
