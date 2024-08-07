import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { BoardsModule } from './boards/boards.module';
import { Board } from '../src/boards/boards.entity';
import { Message } from '../src/messages/message.entity';
import { Community } from './community/commnity.entity';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '00000000',
      database: 'test',
      //entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [Message, Board, Community],
      synchronize: false,
    }),
    CommunityModule,
    MessagesModule,
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
