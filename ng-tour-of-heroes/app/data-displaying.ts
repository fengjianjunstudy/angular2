/**
 * Created by fengjj on 2016/2/3.
 */
import  {Component} from  "angular2/core";
import {TreeContent} from  "./TreeContent"
import {Hero} from "./hero.class"
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
    heroes=[new Hero(1,"Windstorm"),new Hero(2,"Bombasto"),new Hero(3,"Magneta")];
    show:boolean=true;
    btnText:string="隐藏";
    changeShow(){
        if(this.show){
            this.btnText="显示";
        }else{
            this.btnText="隐藏";
        }
        this.show=!this.show;
    };
    Trees=[
        {
            id:1,
            name:"一级1",
            children:[
                {
                    id:11,
                    name:"二级1"
                },
                {
                    id:12,
                    name:"二级2"
                }
            ]

        },
        {
            id:1,
            name:"一级1",
            children:[
                {
                    id:11,
                    name:"二级1"
                },
                {
                    id:12,
                    name:"二级2"
                }
            ]

        }
    ]
}
