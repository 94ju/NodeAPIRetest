// var message ="Hello node";
// console.log(message);

// setTimeout(function(){
//     console.log(message);
// },3000)
// var time =0 ;

// var timer=setInterval(function(){
//     time += 2;
//     console.log(time + " seconds has passed");
//     if(time>5){
//         clearInterval(timer)
//     }
// },2000)
// console.log(__dirname);
function callbackFunction(funcheck){
    funcheck();
}

var fun =function (){
    console.log("Node")
}
callbackFunction(fun);

