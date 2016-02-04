/**
 * Created by fengjj on 2016/2/4.
 */
import {Component} from  "angular2/core"
@Component({
    selector:"my-app",
    template:`
        <input (keyup)="onKey($event)">
        <p>{{values}}</p>
    `
})
export class appComponent{
    values="";
    onKey(event:any){
        this.values+=event.target.value+"|"
    }
}