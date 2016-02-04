/**
 * Created by fengjj on 2016/2/4.
 */
import {Component} from  "angular2/core"
@Component({
    selector:"my-app",
    template:`
        <input  #box (keyup.enter)="addUser(box.value)" (blur)="addUser(box.value)">
        <ul>
            <li *ngFor="#user of users">{{user}}</li>
        </ul>
    `
})
export class appComponent{
    users=["xiaoming","xiahua"];
    addUser(name){
        this.users.push(name);
    }
}