process.argv.length === 4
  ? console.log(`${process.argv[2]} is ${process.argv[3]}`)
  : process.argv.length === 3
  ? console.log(`${process.argv[2]} is undefined`)
  : console.log("undefined is undefined");

//   if (process.argv.length === 4) {
//   console.log(`${process.argv[2]} is ${process.argv[3]}`);
// } else if (process.argv.length === 3) {
//   console.log(`${process.argv[2]} is undefined`);
// } else {
//   console.log("undefined is undefined");
// }
