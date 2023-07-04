import { Module } from '@nestjs/common';
import { HeroSectionController } from './hero-section.controller';
import { HeroesService } from 'src/shared/heroes/heroes.service';

@Module({
  controllers: [HeroSectionController],
  providers: [HeroesService]
})
export class HeroSectionModule {}
