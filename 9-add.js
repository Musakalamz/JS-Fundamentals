const firstNum = parseInt(process.argv[2]);
const secondNum = parseInt(process.argv[3]);

function add(a, b) {
  const sum = a + b;
  console.log(sum);
}

add(firstNum, secondNum);
