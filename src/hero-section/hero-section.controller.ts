import { Controller, Get } from '@nestjs/common';
import {HeroesService} from '../shared/heroes/heroes.service';

@Controller('hero-section')
export class HeroSectionController {

    constructor(private HeroesService : HeroesService) {}

    @Get()
    getAllHeores(): Object {
      return this.HeroesService.getAllHeroes();
    }

}
