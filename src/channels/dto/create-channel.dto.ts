import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString, IsNotEmpty } from 'class-validator';

export class CreateChannelDto {
  @ApiProperty({
    example: 'The name of the channel from Slack ej: Duo Partners',
  })
  @Length(0, 300, {
    message: 'domain length is 0 to 300',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
