/**
 * Created by fengjj on 2016/2/15.
 */
import {Component} from  "angular2/core"
import {Hero} from "./hero"
//import {HEROES} from  "./mockHeroes"
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-list',
    template: `
  <div *ngFor="#hero of heroes">
    {{hero.id}} - {{hero.name}}
  </div>
  `
})

export  class  HeroListComponent{
    heroes:Hero[];
    constructor(heroesService:HeroService){
        this.heroes=heroesService.getHeroes()
    }
}