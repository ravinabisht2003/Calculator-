function dis(input){
    document.getElementById("result").value += input;
}

function clr(){
    document.getElementById("result").value  = "";
}

function solve(){
    try{
       document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch{
        document.getElementById("result").value = "ERROR";
    }
}
















// // function myfunction(event) {
// //     if (
// //         event.key == "0" ||
// //         event.key == "1" ||
// //         event.key == "2" ||
// //         event.key == "3" ||
// //         event.key == "4" ||
// //         event.key == "5" ||
// //         event.key == "6" ||
// //         event.key == "7" ||
// //         event.key == "8" ||
// //         event.key == "9" ||
// //         event.key == "/" ||
// //         event.key == "*" ||
// //         event.key == "-" ||
// //         event.key == "." ||
// //         event.key == "+"
// //     ) {
// //         document.getElementById("result").value = + event.key
// //     }

// // }

// let displayVal = document.getElementById("result");

// function dis(val){
//     displayVal.value +=val;
// }



// function clr(){
//      displayVal.value = "";
//  }



// // let cal = document.getElementById("calc");

// // cal.onkeyup= function(event){
// //     if (event.keyCode ==13){
// //         solve();
// //     }
// // };

// // document.addEventListener('keydown',myfunction);

// // function solve(){
// //     let x = document.getElementById("result").value;
// //     try{
// //         let y = eval(x);
// //         document.getElementById("result").value = y;
// //     }catch(error){
// //         document.getElementById("result").value = "Error";
// //     }
// // }

// // function clr(){
// //     document.getElementById("result").value = "";
// // }