function challengeBanner(n){
    return '######### ' + 'Challenge ' + n +  ' #########';
      }
let result = challengeBanner(1);
console.log(result)
  
//challenge1//
    let num = 1;
    while (num <= 5){
      console.log(num);
      num = num +1;
    }
  
let result1 = challengeBanner(2);
console.log(result1)

//challenge2//
let num2 = 1;
while (num2 <= 6){
  console.log(num2);
  num2 = num2 +1;
}

let result2 = challengeBanner(3);
console.log(result2)

//challenge3//
let num3 = 3;
while (3 <= num3 && num3 <= 6){
  console.log(num3);
  num3 = num3 +1;
}

let result3 = challengeBanner(4);
console.log(result3)

//challenge4//
let num4 = 1;
while (num4 <= 5){
    if(num4 % 2 > 0){
        console.log(num4 + ' Odd');
        num4 = num4 +1;
     } else (num4 % 2 === 0)
         console.log(num4 + ' Even');
         num4 = num4 +1;      
     }
    
let result4 = challengeBanner(5);
console.log(result4)

//challenge5//
let num5 = 1;
while (1 <= num5 && num5 <= 11){
    if (num5 % 2 === 0)
    console.log(num5 + ' Even');
        num5 = num5 +1;    
} 

let result5 = challengeBanner(6);
console.log(result5)

//challenge6//
let num6 = 10;
while (1 <= num6 && num6 <=10){
    console.log(num6);
    num6 = num6 - 1;    
} 
let result6 = challengeBanner(7);
console.log(result6)

//challenge7//
let num7 = 10;
while (1 <= num7 && num7 <= 10){
    console.log(num7);
    num7 = num7 - 1;
}
console.log('Blast Off!')

let result7 = challengeBanner(8);
console.log(result7)

//challenge8//
let num8 = 20;
while (1 <= num8 && num8 <= 20){
    console.log(num8);
    num8 = num8 - 3;
}
//String Challeneges//
let result8 = challengeBanner(9);
console.log(result8)

//challlenge9//
let num9 = 1;
while (num9 <= 7){
    console.log(num9 
    + '. ' + 'Hello!');
    num9 = num9 + 1;
}
let result9 = challengeBanner(10);
console.log(result9)

//challlenge10//
let num10 = 1;
let greetings = 'Ciao bella!'
while (num10 <= 7){
    console.log(num10
    + '. ' + greetings);
    num10 = num10 + 1;
}

let result10 = challengeBanner(11);
console.log(result10)

//challlenge11//??
// let num11 = 1;
// let greetings4 = 'Good-bye'
// let greetings6 = 'Get out!'
// while (1<= num11 <= 4){ 
//     console.log(greetings4);
//         num11 = num11 +1; 
// } if (<4 num11 <= 11){
//     console.log(greetings6);
//     num11 = num11 + 1;
// }  
let result11 = challengeBanner(12);
console.log(result11)

//challlenge12//
for (let letter of 'think') {
    console.log(letter);
  }

let result12 = challengeBanner(13);
console.log(result12)
  
//challlenge13//
//   for (let letter of 'nobody') {
//       console.log(letter);
//     } 

let result13 = challengeBanner(14);
console.log(result13)
  
//challlenge14//
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
    

