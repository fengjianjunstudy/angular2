/**
 * Created by fengjj on 2016/2/4.
 */
import {Component} from  "angular2/core"
@Component({
    selector:"my-app",
    template:`
        <button (click)="onClickMe()">click me</button>
        {{clickMes}}
    `
})
export class appComponent{
    clickMes="";
    onClickMe(){
        this.clickMes="had click me"
    }
}