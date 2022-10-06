import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString, IsNotEmpty } from 'class-validator';

export class CreateTeamDto {
  @ApiProperty({
    example: 'The name of the team from Slack ej: Google',
  })
  @Length(0, 50, {
    message: 'domain length is 0 to 50',
  })
  @IsString()
  @IsNotEmpty()
  readonly domain: string;
}
