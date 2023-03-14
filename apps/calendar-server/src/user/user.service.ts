import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
    async save(user: any): Promise<any> {
        return new User().save(user)
    }

    async read(): Promise<any> {
        return new User().read()
    }
}
