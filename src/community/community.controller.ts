import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CommunityService } from './community.service';
import { Community } from './commnity.entity';

@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Get()
  async findAll(): Promise<Community[]> {
    return this.communityService.findAll();
  }
  @Post()
  async create(
    @Body() post: Omit<Community, 'id' | 'craeteAt' | 'updatedAt'>,
  ): Promise<Community> {
    return this.communityService.create(post);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.communityService.delete(id);
  }
}
