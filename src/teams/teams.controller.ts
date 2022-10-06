import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('teams')
@ApiTags('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  // @Post()
  // create(@Body() createTeamDto: CreateTeamDto) {
  //   return this.teamsService.update(id, createTeamDto);
  // }

  // @Get()
  // findAll() {
  //   return this.teamsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.teamsService.findOne(id);
  // }

  @Post(':id')
  update(@Param('id') id: string, @Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.update(id, createTeamDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.teamsService.remove(id);
  // }
}
