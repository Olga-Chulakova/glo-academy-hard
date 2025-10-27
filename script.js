const num = 266219;
const strDigit = String(num);
let res = 1;

for (let digit of strDigit) {
    res = res * +digit
}

console.log(res);

res = res ** 3;
console.log(res);
console.log(res.toString().slice(0, 2));