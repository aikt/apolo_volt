import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema()
export class Team {
  @Prop()
  team_id: string;
  @Prop()
  domain: string;
  @Prop({ default: now() })
  createdAt: Date;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
