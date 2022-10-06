import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team, TeamDocument } from './schemas/team.schema';
//import { Request } from 'express';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<TeamDocument>,
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamModel.create(createTeamDto);
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }

  async findOne(id: string): Promise<Team> {
    return this.teamModel.findOne({ team_id: id }).exec();
  }

  async update(id: string, createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamModel.findOneAndUpdate({ team_id: id }, createTeamDto, {
      new: true,
      upsert: true,
    });
  }

  async remove(id: string) {
    return this.teamModel.findByIdAndRemove({ team_id: id }).exec();
  }
}
