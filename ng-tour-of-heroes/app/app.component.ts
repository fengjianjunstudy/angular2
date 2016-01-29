import {Component} from 'angular2/core';

interface Hero{
    id:number;
    name:string;
}

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})
export class AppComponent {
    public title='Tour of Heroes';
    public hero="windstrom";
}