// var message ="Hello node";
// console.log(message);

// setTimeout(function(){
//     console.log(message);
// },3000)
var time =0 ;

setInterval(function(){
    time += 2;
    console.log(time + " seconds has passed")
},2000)