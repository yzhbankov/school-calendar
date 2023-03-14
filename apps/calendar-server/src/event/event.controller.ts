import { Controller, Post, Get, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto';

@Controller('event')
export class EventController {
    constructor(private readonly appService: EventService) {}

    @Post()
    async saveEvent(@Body() createEventDto: CreateEventDto): Promise<string> {
        return this.appService.save(createEventDto)
    }

    @Get()
    async readEvent(): Promise<string> {
        return this.appService.read()
    }
}
