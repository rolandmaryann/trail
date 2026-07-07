// let person = {
//   name: "ada",
// };
// person.age = 26;

// console.log(person);
// // delete person.name;

// console.log(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));

// let product = {
//   product1: "milo",
//   product2: "cowbell",
// };

// // let price = {
// //   quantity: 50,
// //   ...product,
// // };
// // console.log(price);

// // let class_a = {
// //   score1: 10,
// //   score2: 20,
// // };
// // let class_b = {
// //   score3: 40,
// //   score4: 50,
// // };

// // let sum = class_a.score1 + class_a.score2 + class_b.score3 + class_b.score4;

// // console.log(sum);

// // let student1 = {
// //   name: "martins",
// //   age: 22,
// //   score1: 70,
// // };

// // let student2 = {
// //   name: "victor",
// //   age: 18,
// //   score2: 50,
// // };

// // let student3 = {
// //   name: "emmanuel",
// //   age: 21,
// //   score3: 50,
// // };

// // let total = student1.score1 + student2.score2 + student3.score3;
// // console.log(total);
// // delete student1.age;

// // console.log(student1);
// // console.log(Object.student3);

// let student = {
//   name: "emmanuel",
//   age: 21,
//   score3: 50,
// };

// console.log("age" in student);

// to replace a number or array
// let score = [40, 50, 60, 70, 50];
// score[3] = 10;
// console.log(score);
// to check if 50 exits
// let score = [40, 50, 60, 70, 50];
// console.log(score.includes(50));

// to multiple each number
// let score = [40, 50, 60, 70, 50];

// let score2 = score.map((num) => num * 2);
// console.log(score2);
// // or console.log(score.map((num) => num * 2));
// // to add a surname of another name to the existing one
// let names = ["ada", "obi", "nkechi"];
// let fullname = names.map((name) => "chidera" + name);
// console.log(fullname);
// // for each
// to get the total number of the array
// let score = [40, 50, 60, 70, 50];

// let total =0
// score.forEach((num) =>total +=num)
// console.log(total);

//  prompt

// let age = prompt("how old are you", 0);
// let access = age >= 18 ? "access granted" : "access denied";
// alert(access);

// let access = prompt("login", "password");
// let pin = access == "1234@55" ? "access granted" : "access denied";
// alert(pin);

// let age = confirm("Are you above 18? ");
// let access = age ? "access granted" : "access denied";
// alert(access);

// Bank

// const pin = prompt("Enter your Pin", 0);

// const correct_pin = 1234;

// if (pin == correct_pin) {
//   let message = `1. Check Balance
// 2. Transfer Money
// 3. Get account number`;

//   let value = prompt(message, 0);

//   if (value == 2) {
//     let recipient = prompt("Enter Account number? ", 0);
//     let ammount = prompt("Entern amount");

//     alert(`Successfuly sent N${ammount} to ${recipient}`);
//   } else if (value == 1) {
//     alert("N5000");
//   } else if (value == 3) {
//     let agree = confirm(`This transaction will cost you N10
// proceed?`);

//     if (agree)
//       alert(309876543);
//     }
//   }
// } else {
//   alert("wrong pin");
// }

// alert("welcome to the neon lounge ssescurity check!");
// let name = prompt("what is your name", "name");

// let age = prompt("please enter your age ", 0);
// // age = 18(age);
// if (age < 18) {
//   alert("sorry" + name + ",you are too young to enter!");
// } else {
//   alert("access granted");
//   let vip = confirm("Do you have a Vip ticket or Reservation ?");

//   if (vip) {
//     alert("Access Granted ! welcome to the party,Vip" + name + "!");
//   } else {
//     alert("Sorry" + name + "we cant grant you access");
//   } 
// }

// No 1.
// const groceries =["milk","milo","sugar","egg"]
// groceries.push("chocolate")
// console.log(groceries);
// no 2.
//  const groceries =["milk","milo","sugar","egg"]
// groceries.unshift("coffee")
// console.log(groceries);
// no 3.

//  const groceries =["milk","milo","sugar","egg"]
//  groceries.pop()
//  console.log(groceries);
//  no 4. 
//  const groceries =["milk","milo","sugar","egg"]
//  console.log(groceries.length);
 const students =["blessing","emeka","aisha","chioma"]
console.log(students[2]);
 students[3]="bola"

 console.log(students);
 
 