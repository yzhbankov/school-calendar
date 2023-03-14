import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty({ example: "Math", description: 'Event title' })
    email: string;

    @ApiProperty({ example: "Math lesson", description: 'Event description' })
    name: string;

    @ApiProperty({ example: 1, description: 'The user identifier' })
    userId: number;
}
