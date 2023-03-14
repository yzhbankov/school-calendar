import { EventService } from './event.service';
export declare class EventController {
    private readonly appService;
    constructor(appService: EventService);
    saveEvent(): Promise<string>;
    readEvent(): Promise<string>;
}
