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

// question 8

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

// question 9

// var arr = [24 , 53, 78, 91, 12];
// var larg= 0;

// for (i=0; i<=larg;i++){
//     if (arr[i]>larg) {
//         var larg=arr[i];
//     }
// }

// document.write("the largest number is "+ larg);

// question 10

// var arr = [24 , 53, 78, 91, 12];
// var small= 91;

// for (i=0; i<small;i++){
//     if (arr[i]<small) {
//         var small=arr[i];
//     }
// }
// document.write("the smallest number is "+ small)

// // question 11
// var arr = [24 , 53, 78, 91, 12];
// var larg= 0;
// var small = 91;

// for (i=0; i<=larg;i++){
//     if (arr[i]>larg) {
//         var larg=arr[i];
//     }
// }
// document.write("the largest number is " + larg + "</br>")

// for (i=0; i<small;i++){
//         if (arr[i]<small) {
//             var small=arr[i];
//         }
// }
// document.write("the smallest number is " + small)

// question 12

 
//  for(let i=0; i< 100; i++) {        
//     if( i % 5 === 0){                    
//       document.write(i + "</br>")    
//     }    

// }

// question 13

// var students = ["ali","sami","taha","inam"]
// var scores = [58,73,89,90]
// document.write(`<table border=1 ><th>students</th><th>scores</th> <tr><td>ali</td><td>58</td></tr> <tr><td>sami</td> <td>73</td></tr> <tr><td>taha</td> <td>89</td></tr> <tr><td>inam</td><td>90</td></tr></table>`)

// question 14

// var scores = [12,45,3,22,34,50];
// var inp = prompt("enter a number where you stop array [12,45,3,22,34,50]")
// var num = Number(inp);
// for(i=0;i<scores.length;i++){
//     if(num == scores[i]){
//         var newscore = scores.slice(0,i+1)
//         document.write(newscore)
//     }
// }

// question 15

// var a = [[1,2,3],[4,5,6],[7,8,9]];
// for(i=0;i<a.length;i++){
//     document.write(a[i] + "</br>" )
// }

// question 16

// var inp = prompt("enter a num");
// var num = Number(inp);
// for(i=0;i>0;i++){
//    document.write( num - 0.5);
// }