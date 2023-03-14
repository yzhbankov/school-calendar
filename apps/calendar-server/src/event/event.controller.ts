import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventService } from './event.service';
import { Event } from './entity/event.entity';
import { CreateEventDto } from './dto';

@ApiBearerAuth()
@ApiTags('event')
@Controller('event')
export class EventController {
    constructor(private readonly appService: EventService) {}

    @Post()
    @ApiOperation({ summary: 'Create event' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 422, description: 'Validation error.' })
    async saveEvent(@Body() createEventDto: CreateEventDto): Promise<string> {
        return this.appService.save(createEventDto)
    }

    @Get()
    @ApiResponse({ status: 200, description: 'The found events', type: [Event] })
    async readEvent(): Promise<string> {
        return this.appService.read()
    }
}
