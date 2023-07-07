import { Injectable } from '@nestjs/common';
import { Heroes } from 'src/models/Heroes';

@Injectable()
export class HeroesService {

    private Heroes: Heroes[] = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    getAllHeroes() {
        return this.Heroes;
    }

    getHeroById(id : string) {
      return this.Heroes.filter(p => Number(id)===p.id);
    }

    deleteHero(heroId : string) {
      for (let i = this.Heroes.length - 1; i >= 0; --i) {
        if (this.Heroes[i].id === Number(heroId)) {
            this.Heroes.splice(i,1);
        }
      }
      return this.Heroes;
    }

    addHero(name : string) {
      if(!name) {
        return;
      }
      const id = 11000 + this.Heroes.length;
      const Obj = {id : id , name : name};
      this.Heroes.push(Obj);
      console.log(Obj);

      return this.Heroes;
    }

    updateHero(id : string , name : string) {
      for (let i = this.Heroes.length - 1; i >= 0; --i) {
        if (this.Heroes[i].id === Number(id)) {
          console.log(name);
            this.Heroes[i].name = name;
        }
      }
      console.log(this.Heroes);
      return this.Heroes;
    }

}
