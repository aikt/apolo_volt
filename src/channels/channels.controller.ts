import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('channels')
@ApiTags('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  // @Post()
  // create(@Body() createChannelDto: CreateChannelDto) {
  //   return this.channelsService.update(id, createChannelDto);
  // }

  // @Get()
  // findAll() {
  //   return this.channelsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.channelsService.findOne(id);
  // }

  @Post(':id')
  update(@Param('id') id: string, @Body() createChannelDto: CreateChannelDto) {
    return this.channelsService.update(id, createChannelDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.channelsService.remove(id);
  // }
}
