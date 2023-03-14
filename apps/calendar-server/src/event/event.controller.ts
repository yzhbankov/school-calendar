import { Controller, Post, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private readonly appService: EventService) {}

    @Post()
    async saveEvent(): Promise<string> {
        return this.appService.saveEvent()
    }

    @Get()
    async readEvent(): Promise<string> {
        return "Hello from read event"
    }
}
