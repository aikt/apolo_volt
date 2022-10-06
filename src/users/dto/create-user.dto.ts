import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'The team_id from Slack ej: T03U5JG44PP',
  })
  @Length(0, 12, {
    message: 'team_id length is 0 to 12',
  })
  @IsString()
  @IsNotEmpty()
  readonly team_id: string;

  @ApiProperty({
    example: 'The name of the user from Slack ej: Ryan',
  })
  @Length(0, 300, {
    message: 'name length is 0 to 300',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 'The username of the user from Slack ej: Ryanbaby',
  })
  @Length(0, 300, {
    message: 'username length is 0 to 300',
  })
  @IsString()
  @IsNotEmpty()
  readonly username: string;
}
