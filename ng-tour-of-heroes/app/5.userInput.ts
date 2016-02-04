/**
 * Created by fengjj on 2016/2/4.
 */
import {Component} from  "angular2/core"
@Component({
    selector:"my-app",
    template:`
        <input  #box (keyup)="onKey(box.value)">
        <p>{{values}}</p>
    `
})
export class appComponent{
    values="";
    onKey(value:string){
        this.values+=value+"|"
    }
}