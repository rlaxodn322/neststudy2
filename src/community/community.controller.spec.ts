import { Test, TestingModule } from '@nestjs/testing';
import { CommnunityController } from './community.controller';

describe('CommnunityController', () => {
  let controller: CommnunityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommnunityController],
    }).compile();

    controller = module.get<CommnunityController>(CommnunityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
