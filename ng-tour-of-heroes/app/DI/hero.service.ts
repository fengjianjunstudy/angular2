/**
 * Created by fengjj on 2016/2/15.
 */
import {Injectable} from "angular2/core"
import  {Hero} from "./hero"
import {HEROES} from  "./mockHeroes"
import {Logger} from "../logger.service"

@Injectable()
export class HeroService{
    constructor(private _logger:Logger,private _isAuthorized:boolean){}
    getHeroes(){
        let auth = this._isAuthorized ? 'authorized ': 'unauthorized';
        this._logger.log(`Getting heroes for ${auth} user.`);
        return HEROES.filter(hero =>this._isAuthorized || !hero.isSecret);
    }
}