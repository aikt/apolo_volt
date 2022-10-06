import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateThreadDto {
  @ApiProperty({
    example:
      'The payload string that contains the team_id, channel_id, user_id etc',
  })
  @IsString()
  @IsNotEmpty()
  readonly payload: string;
}
