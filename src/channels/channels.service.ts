import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel, ChannelDocument } from './schemas/channel.schema';

@Injectable()
export class ChannelsService {
  constructor(
    @InjectModel(Channel.name)
    private readonly channelModel: Model<ChannelDocument>,
  ) {}
  async create(createChannelDto: CreateChannelDto): Promise<Channel> {
    return this.channelModel.create(createChannelDto);
  }

  async findAll(): Promise<Channel[]> {
    return this.channelModel.find().exec();
  }

  async findOne(id: string): Promise<Channel> {
    return this.channelModel.findOne({ channel_id: id }).exec();
  }

  async update(
    id: string,
    createChannelDto: CreateChannelDto,
  ): Promise<Channel> {
    return this.channelModel.findOneAndUpdate(
      { channel_id: id },
      createChannelDto,
      {
        new: true,
        upsert: true,
      },
    );
  }

  async remove(id: string) {
    return this.channelModel.findByIdAndRemove({ channel_id: id }).exec();
  }
}
