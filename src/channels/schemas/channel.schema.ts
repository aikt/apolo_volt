import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type ChannelDocument = Channel & Document;

@Schema()
export class Channel {
  @Prop()
  channel_id: string;
  @Prop()
  name: string;
  @Prop({ default: now() })
  createdAt: Date;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
