import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {HeroesService} from '../shared/heroes/heroes.service';

@Controller('hero-section')
export class HeroSectionController {

    constructor(private HeroesService : HeroesService) {}

    @Get()
    getAllHeores(): Object {
      return this.HeroesService.getAllHeroes();
    }

    @Get(':id')
    getHeroById(@Param('id') id : string) : Object {
      return this.HeroesService.getHeroById(id);
    }

    @Delete(':id')
    deleteHero(@Param('id') id : string)  {
      
      return this.HeroesService.deleteHero(id);
    }

    @Post(':name')
    addHero(@Param('name') name : string) {
     
      return this.HeroesService.addHero(name);
    }

    @Put(':id/:selectedHero')
    updateHero(@Param('id') id : string , @Param('selectedHero') selectedHero : string) {
      
      return this.HeroesService.updateHero(id  , selectedHero);
    }

}
