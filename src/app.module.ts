import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThreadsModule } from './threads/threads.module';
import { TeamsModule } from './teams/teams.module';
import { ChannelsModule } from './channels/channels.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/volt'),
    ThreadsModule,
    TeamsModule,
    ChannelsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
