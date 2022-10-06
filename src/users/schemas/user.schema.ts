import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, now } from 'mongoose';
import { TeamSchema, Team } from 'src/teams/schemas/team.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  user_id: string;
  @Prop()
  name: string;
  @Prop()
  username: string;
  @Prop({ type: mongoose.Schema.Types.String, ref: 'TeamSchema' })
  team_id: Team;
  @Prop({ default: now() })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
