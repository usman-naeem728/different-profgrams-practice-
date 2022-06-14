// question 1 

// for (let index = 0; index < 6; index++) {
//     document.write("hello world" + "</br>");
    
// }


//  question 2

// for(i = 0; i <11; i++ ){
//     document.write(i + "</br>")
// }

// question 3

// let inp = prompt("enter a number");
// let num = Number(inp);
// let length = prompt("length of table");
// let length1 = Number(length);

// for(i = 0; i <= length1; i++ ){
//     document.write(`${num} X ${i}  = ${num * i} </br>`)
// }

// question 4 

// let a = ["nokia","samsung","apple","sony","huawei"]

// for(i=0; i < a.length; i++){
//     document.write(a[i]+"</br>")
// }

// question 5

// let a = ["nokia","samsung","apple","sony","huawei"]

// for(i=0; i < a.length; i++){
//     document.write(a[i]+"</br>")
// }
// for(i= 0 ; i< a.length; i++){
//     document.write(" elment at  index " + i + " is "  + a[i] +"</br>" )
// } 

// question 6
// let inp = prompt("enter number of items");
// let length = Number(inp);
// var sub_array = [];

//     for (var i = 0; i < length; i++) {
//     var item = prompt("enter " + i + "item");
//         sub_array.push(item);
//     }
// document.write(sub_array);


// question 7 

// document.write(`<h1>Counting:</h1>`)
// for(i=0; i < 16; i++){
//     document.write(i + "," );
// }

// document.write(`<h1>Reverse Counting:</h1>`)
// for(i=10; i > 0; i--){
//     document.write(i + "," );
// }

// document.write(`<h1>Even Counting:</h1>`)
// for(i=0; i < 20; i++){
//     if(i % 2 == 0){
//         document.write(`${i} ,`);
//     }
// }

// document.write(`<h1>odd Counting:</h1>`)
// for(i=0; i < 20; i++){
//     if(i % 2 != 0){
//         document.write(`${i} ,`);
//     }
// }

// document.write(`<h1>series Counting:</h1>`)
// for(i=1; i < 20; i++){
//     if(i % 2 == 0){
//         document.write(`${i}k ,`);
//     }
// }

// question 7 

// var inp = prompt("enter car make");
// var inp2 = inp.toLowerCase()
// var arr = ["honda","suzuki","toyota","changhan","audi"]
// var check = false;
// for(i=0; i < arr.length ; i++){
//     if(inp2 == arr[i]){
//         document.write(`<i><b> found at index ${i}</b></i>`)
//         var check = true;
//     }
   
// }
// if( check == false){
        
//     document.write(`<i><b>not found</b></i>`)
// }