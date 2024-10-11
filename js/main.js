/*_____________________________ massiv ________________________________ */
// 1-masala
let fruit = ["olma", "anor", 'nok']

console.log(fruit[0]);
console.log(fruit[2]);

// // 2-masala

// let cars = ["Mercedes", "Bmw", "tesla", "pagani", "bugatti"];

// cars [4] = 'salom'

// console.log(cars);

// // 3-masala

// let fruit = [];
// fruit.push("olma");
// fruit.push("nok");
// fruit.push("anor");
// fruit.push("anjir");

// console.log(fruit);

// // 4-masala

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

// // 5-masala

// let arr = [1, 2, 3, 4, 5];
// arr.push (6);
// console.log(arr [5] );

// //  6-masala

// let arr = [1, 2, 3, 4, 5, 6];
// arr.pop(6);
// console.log(arr);

// // 7-masala

// let app = ["cal off duty", "free-fire", "subway surfers"];

// app.unshift("pubg monile");

// console.log(app);

// // 8-masala

// let app = ["cal off duty", "free-fire", "subway surfers"];

// app.shift("cal off duty");

// console.log(app);

// 9-masala

/*_______________________________ for loop ____________________________________ */

// // 1-masala
// let arr = [5, -3, 12, 8, 0, -7, 15, 3, -1, 12];

// console.log(arr);

// // 2-masala
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// // 3-masala
// let evens = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evens.push(arr[i]);
//   }
// }
// console.log(evens);

// // 4-masala
// let odds = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     odds.push(arr[i]);
//   }
// }
// console.log(odds);

// // 5-masala
// let negatives = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     negatives.push(arr[i]);
//   }
// }
// console.log(negatives);

// // 6-masala
// let max = arr[0];
// let i = 1;
// while (i < arr.length) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   i++;
// }
// console.log(max);

// // 7-masala
// let min = arr[0];
// i = 1;
// while (i < arr.length) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   i++;
// }
// console.log(min);

// // 8-masala
// let avg = sum / arr.length;
// console.log(avg);

// // 9-masala
// let positives = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     positives.push(arr[i]);
//   }
// }
// console.log(positives);

// // 10-masala
// let squares = [];
// for (let i = 0; i < arr.length; i++) {
//   squares.push(arr[i] * arr[i]);
// }
// console.log(squares);

// // 11-masala
// let repeated = [];
// for (let i = 0; i < arr.length; i++) {
//   repeated.push(arr[i]);
//   repeated.push(arr[i]);
// }
// console.log(repeated);

// // 12-masala
// let counts = {};
// for (let i = 0; i < arr.length; i++) {
//   counts[arr[i]] = (counts[arr[i]] || 0) + 1;
// }
// console.log(counts);

// // 13-masala
// let divided = [];
// for (let i = 0; i < arr.length; i++) {
//   divided.push(arr[i] / 3);
// }
// console.log(divided);

// // 14-masala
// let evenIndices = [];
// for (let i = 0; i < arr.length; i += 2) {
//   evenIndices.push(arr[i]);
// }
// console.log(evenIndices);

// // 15-masala
// let reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed);

// // 16-masala
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${i + 1}-element: ${arr[i]}`);
// }

// // 17-masala
// let unique = [];
// for (let i = 0; i < arr.length; i++) {
//   if (counts[arr[i]] === 1) {
//     unique.push(arr[i]);
//   }
// }
// console.log(unique);

// // 18-masala
// let strings = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     strings.push(arr[i]);
//   }
// }
// console.log(strings);

// // 19-masala
// let sortedArr = [];
// for (let i = 0; i < arr.length; i++) {
//   sortedArr.push(arr[i]);
// }
// for (let i = 0; i < sortedArr.length; i++) {
//   for (let j = i + 1; j < sortedArr.length; j++) {
//     if (sortedArr[i] < sortedArr[j]) {
//       let temp = sortedArr[i];
//       sortedArr[i] = sortedArr[j];
//       sortedArr[j] = temp;
//     }
//   }
// }
// console.log(sortedArr);

// // 20-masala
// let maxIndex = arr.indexOf(max);
// let minIndex = arr.indexOf(min);
// console.log(maxIndex, minIndex);

// // 21-masala
// let doubled = [];
// for (let i = 0; i < arr.length; i++) {
//   doubled.push(arr[i] * 2);
// }
// console.log(doubled);

// // 22-masala
// let dividedByIndex = [];
// for (let i = 0; i < arr.length; i++) {
//   dividedByIndex.push(i !== 0 ? arr[i] / i : 0);
// }
// console.log(dividedByIndex);

// // 23-masala
// let everySecond = [];
// for (let i = 1; i < arr.length; i += 2) {
//   everySecond.push(arr[i]);
// }
// console.log(everySecond);

// // 24-masala
// let positiveNumbers = [];
// for (let i = 0; i < arr.length; i++) {
//   positiveNumbers.push(Math.abs(arr[i]));
// }
// console.log(positiveNumbers);

// // 25-masala
// let onlyZeros = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     onlyZeros = false;
//     break;
//   }
// }
// console.log(onlyZeros ? "Yes" : "No");
