import { Injectable } from '@nestjs/common';
import { Event } from '../../models';

@Injectable()
export class EventService {
    async save(event: any): Promise<any> {
        return new Event().save(event)
    }

    async read(): Promise<any> {
        return new Event().read()
    }
}
