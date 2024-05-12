output=document.getElementById("output");
output=document.getElementById("output2");

// const calc=[1,2,3,4,5,6].reduce((accumulator, currentItem)=>{
//   return (accumulator + currentItem);
// });
// output.innerText= calc  

// const calc2=[1,2,3,4,5,6].reduce((accumulator, currentItem)=>{
//   return Math.max(accumulator , currentItem);
// });
// output.innerText= calc2

// // Write a complete blog on reduce array data manipulation

// const evenNumbers=[2,4,6,8]

// // SEARCHING ELEMENTS IN ARRAY;
// output.innerText=evenNumbers.find(item =>item>4)
// output.innerText=evenNumbers.findIndex(item =>item===4)
// output.innerText=evenNumbers.includes(8)

// // LEARN THE CONCEPT OF FLAT AND FLATMAP
// const nestedArray = [1,2,4,[5,6,7,8],[10,20,30]]
// output.innerText= nestedArray.flat()
// console.log(nestedArray);

// const nestedArray2 = [1,2,4,[5,6,7,8],[10,20,30,[1,2,3,6]]]
// output.innerText= nestedArray2.flat(2);
// console.log(nestedArray2);

// // FLAT MAP



// // Object Data Manipulation
// // const studentDetails= {
// //   name: "Student",
// //   address:"Rockdale",
// //  age:4,
// //  phone:'12345678'
// // };

// // Accessing object properties 
// // output.innerText=studentDetails.name  dot notation  
// // output.innerText=studentDetails["name"]  bracket notation

// // Adding property top object
// Object.assign(studentDetails, {gender: "male"})
// console.log(studentDetails);


// // Spread Operator It makes new Object
// const updatedStudentDetails= {...studentDetails, country:"Australia"}

// // Delete properties 
// delete studentDetails.name  

// // Converting object in arrays 
// const arrayObj=Object.entries(studentDetails)
// console.log(arrayObj);

// const arrayObj2=Object.keys(studentDetails)
// console.log(arrayObj2);

// const arrayObj3=Object.values(studentDetails)
// console.log(arrayObj3);


// Looping in Objects

// const array5 = arrayObj3.map(item =>
//   item
// )
// console.log(array5);


// Object Destructuruing
// const studentDetails= {
//   name: "Student",
//   address:"Rockdale",
//  age:4,
//  phone:'12345678'
// };   

// // const {name, address: fullAdress, roomNumber=12} = studentDetails2
// // output.innerText=fullAdress;

// // Default Parameters, Rest Parameters, And Spread

// // const addNum = (a=2,b=3) =>a+b;
// // output.innerText= addNum(4,7);

// const printDetails= ({name="Whatever Default"})=>{
//   return name ;
// }
// output.innerText=printDetails(studentDetails);


// // rest
// const printDetails2= (address,  ...studentDetails)=>{
//   return address;
// }
// output.innerText = printDetails2(studentDetails)


// // Date Manipulation
// const currentDate= new Date()
// output.innerText= currentDate
// // extract Get info 
// output.innerText=currentDate.getTime();
// output.innerText=currentDate.getFullYear();
// output.innerText=currentDate.getMonth();
// output.innerText=currentDate.getMinutes();


// // Set Methods

// output.innerText=currentDate.setMinutes();
// output.innerText=currentDate.setDate(currentDate.getDate()+10);


// // date Formatting
// output.innerText= currentDate.toLocaleDateString();

// const birthday= new Date("1999/08/3");
// output.innerText= birthday.getDay();


// // TimeScheduling 
// const printLogs= ()=> console.log("HELLOO!!!");



// setTimeout(printLogs,3000)


// const greetUser=()=>alert("welcome to my website");
// setTimeout(greetUser, 3000);
// // setInterval(greetUser, 3000);


// // Clear TimeOut

// const time= setInterval(printLogs, 3000);
// setTimeout(()=>clearInterval(time), 9001);

// let counter= 100;
// const countDown = setInterval(()=>{
// console.log("Birthday Celebration Starting Soon");
// counter ++
// },1000);

// if (counter===0){
//   clearInterval()
//   console.log("YAAH !!! HBD");
// }


// Regex Regular Expression
// Syntax 
// --/pattern/modifiers(s)

const sentence = "The quick brown fox jumps over the lazy dog"
const regex = /\brown/

output.innerText= sentence.match(regex);

