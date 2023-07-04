import { Test, TestingModule } from '@nestjs/testing';
import { HeroSectionController } from './hero-section.controller';

describe('HeroSectionController', () => {
  let controller: HeroSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroSectionController],
    }).compile();

    controller = module.get<HeroSectionController>(HeroSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
