import EventEmitter from "node:events";
class MyEmitter extends EventEmitter{}
const myEmitter:MyEmitter=new MyEmitter();
myEmitter.on("event",function(this: any, a: string, b: string){
    console.log(a,b,this,this===myEmitter);
})
myEmitter.emit("event","a","b")