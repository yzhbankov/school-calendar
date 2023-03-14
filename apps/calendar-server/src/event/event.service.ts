import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {
    saveEvent(): string {
        return "Saved Event"
    }
}
