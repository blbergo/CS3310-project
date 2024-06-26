import { integerLiterals } from "../part1/integer";

// Dummy integer literals
const integers = {
  "0_": false,
  _1: false,
  "0103213": false,
  "0O34556_413_7": true,
  "0x_Abd_Ef9_301304": true,
  "0Xdeadbeef": true,
  "0o_1234567": true,
  x0319348: false,
};

console.log("Running tests for integer literals...\n");
for (const [key, value] of Object.entries(integers)) {
  console.log(`Testing: ${key}, expecting: ${value}\n`);
  console.log(`Result: ${integerLiterals(key)}\n`);
  console.assert(value === integerLiterals(key), "Test incorrect\n");
}
console.log("All tests complete.\n");
