/**
 * Created by fengjj on 2016/2/15.
 */
import {Injectable} from "angular2/core"

@Injectable()
export class Logger{
    logs:string[]=[];
    log(message:string){
        this.logs.push(message);
        console.log(message)
    }
}