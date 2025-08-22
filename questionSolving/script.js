// Question 1 Create User Input

// let a = [];
// for(let i = 1; i <= 5; i++){
//     a[i] = prompt("Enter Five Number");
//     document.write(a[i], '<br>');
// }

// Question 2 Find Even or Odd Number
// let a = prompt("Enter Number to check EVEN/ODD...!");

// if(a % 2 === 0){
//     document.write(`${a}, is an Even Number`);
// }else{
//     document.write(`${a}, is an Odd Number`);
// }

// Question 3 find Prime Number

// let primeNum = [];

// for(let i = 0; i < 10; i++){
//     let num = parseInt(prompt('Enter your number...!'));
//     let count = 0;

//     for(let j = 0; j <= num; j++){
//         if(num % j === 0)   {
//             count++;
//         }
//     }

//     if(count === 2){
//         primeNum.push(num);
//     }
// }

// document.write("Prime Numbers: -", primeNum.join(","));


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let PrimeNum = [];
// for(let i = 0; i < numbers.length; i++){
// let num = numbers[i];
// let isPrime = true;
// if(num < 2){
//     isPrime = false;
// }else{
//     for(let j = 2; j < num; j++){
//         if(num % j === 0){
//             isPrime =false;
//             break;
//         }
//     }
// }
// if(isPrime){
//     PrimeNum.push(num);
// }
// }

// document.write(`This are the prime numbers ${PrimeNum}`);

// let names = ['vijay', 'AshaDevi', 'Archana', 'Ankita'];

// let NewName = prompt('Enter Name');

// names.push(NewName);

// for(let i = 0; i < names.length; i++){
//     document.write(names[i] + '<br>');
// }


// Question 4 Find Unique number 


// Find Second Largest Number

// let num = [1, 2, 60, 4, 61, 211];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// for(let i = 0; i < num.length; i++){
//     if(num[i] > largest){
//         secondLargest = largest;
//         largest = num[i];
//     }else if(num[i] > secondLargest && num[i] !== largest){

//     }
// }
// console.log('Largest : -', largest);
// console.log('SecondLargest : -', secondLargest);
