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
    model = new Hero(18, 'Dr IQ', this.powers[1], 'Chuck Overstreet');
    submitted=false;
    onSubmit(){
        this.submitted=true;
    }
    get diagnostic(){ return JSON.stringify(this.model)}

}
