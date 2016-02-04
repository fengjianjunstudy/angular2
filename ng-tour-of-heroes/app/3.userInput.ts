/**
 * Created by fengjj on 2016/2/4.
 */
import {Component} from  "angular2/core"
@Component({
    selector:"my-app",
    template:`
        <input  #box>
        <p>{{box.value}}</p>
    `
})
export class appComponent{
    values="";
    onKey(event:any){
        this.values+=event.target.value+"|"
    }
}