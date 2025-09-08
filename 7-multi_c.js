let index = 0;
while (index < process.argv[2]) {
  Number(process.argv[2])
    ? console.log("C is fun")
    : process.argv.length === 2
    ? console.log("Missing number of occurrences")
    : null;

  index += 1;
}
