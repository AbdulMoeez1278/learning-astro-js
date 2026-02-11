// JS Practice Questions

// // async/await
// async function fetchData() {
//   try {
//     // const res = await fetch("https://dummyjson.com/products/1");
//     const res = await fetch("https://dummyjson.com/posts/1");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// fetchData();

// // Nested Objects - Arrays
// let userProfile = {
//   id: 101,
//   name: "John Doe",
//   contactInfo: {
//     // Nested object
//     email: "john.doe@example.com",
//     phone: "123-456-7890",
//     address: {
//       // Even deeper nesting
//       street: "123 Main St",
//       city: "Anytown",
//       zip: "12345",
//     },
//   },
//   roles: ["user", "editor"], // Nested array
// };

// Closures
// function outer() {
//   let count = 0;

//   // inner function
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2

// // Event Loop
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

// // Function Binding
// const person = {
//   name: "Moeez",
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };
// const greet = person.greet();

// // Promises
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Data Loaded"), 3000);
// });

// promise.then((data) => console.log(data));

// // Map and ForEach Loop
// const arr = [1, 2, 3];
// const doubled = arr.map((n) => n * 2);
// arr.forEach((n) => console.log(n));

// console.log(doubled);

// // Shallow Copy
// const obj = { name: "Moeez" };
// const newObj = { ...obj };
// newObj.name = "Abdul";

// console.log("Old Object", obj);
// console.log("New Object", newObj);

// Callback Hell
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 5000);
  }, 3000);
}, 1000);
