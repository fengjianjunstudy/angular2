/**
 * Created by fengjj on 2016/2/4.
 */
import {Component} from "angular2/core"
import {NgForm} from "angular2/common"
import {Hero} from "./HeroMedel"

@Component({
    selector:"my-app",
    templateUrl:"../template/form.html"
})
export class HeroFormComponent{
    powers=['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    active=true;
    model = new Hero(18, 'Dr IQ', this.powers[1], 'Chuck Overstreet');
    submitted=false;

    onSubmit(){
        this.submitted=true;
    }
    newHero(){
        this.model = new Hero(42, '', '');
        active=false;
        setTimeout(()=>this.active=true,0)
    }
    get diagnostic(){ return JSON.stringify(this.model)}

}
