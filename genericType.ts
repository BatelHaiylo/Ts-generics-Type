function getNumTimes <T,N> (arg:T,arg2:N):void{
    for(let i: N =0; i<arg2; i++){
        console.log(arg)
    }
}
// getNumTimes<string,number>("Queen",20)

function getIfIsTrue <T,N> (arg1:T,arg2:N,arg3:boolean):T {
    let newArg: T = "B";
    return  arg3 ? arg1 : newArg
}
console.log( getIfIsTrue <string,number>("Yass",5,false))