import { Controller, Post, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private readonly appService: EventService) {}

    @Post()
    async saveEvent(): Promise<string> {
        return this.appService.save({ title: "New Event", description: "Description" })
    }

    @Get()
    async readEvent(): Promise<string> {
        return this.appService.read()
    }
}
