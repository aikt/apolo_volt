import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ThreadDocument = Thread & Document;

@Schema()
export class Thread {
  @Prop()
  team_id: string;
  @Prop()
  channel_id: string;
}
