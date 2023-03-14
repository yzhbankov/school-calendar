import { EventService } from './event.service';
import { CreateEventDto } from './dto';
export declare class EventController {
    private readonly appService;
    constructor(appService: EventService);
    saveEvent(createEventDto: CreateEventDto): Promise<string>;
    readEvent(): Promise<string>;
}
