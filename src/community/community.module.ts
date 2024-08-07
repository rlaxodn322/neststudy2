import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Community } from './commnity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Community])],
  providers: [CommunityService],
  controllers: [CommunityController],
})
export class CommunityModule {}
