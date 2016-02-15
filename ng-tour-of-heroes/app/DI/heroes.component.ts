/**
 * Created by fengjj on 2016/2/15.
 */
import  {Component} from "angular2/core"
import {HeroListComponent} from  "./hero-list.component"
import {HeroService} from "./hero.service"
import {Logger} from "../logger.service"

@Component({
    selector:"my-heroes",
    template:`
        <h2>Heroes</h2>
        <hero-list></hero-list>
    `,
    directives:[HeroListComponent],
    providers:[Logger,HeroService]
})

export  class HeroesComponent{}
