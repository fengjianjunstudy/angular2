/**
 * Created by fengjj on 2016/2/3.
 */
import  {Component} from  "angular2/core";
@Component({
    selector:"my-app",
    /*template: `
     <h1>{{title}}</h1>
     <h2>My favorite hero is:{{myhero}}</h2>

     `*/
    templateUrl:"../template/data-display.html"

})
export class appComponent{
    title="Tour of Heroes!";
    myhero="Windstorm";
}
