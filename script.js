let number = [100, 55, 15, 300, 20]

let sum = 0;
for(let i = 0; i <= number.length -1; i++){
    sum += number[i]

}

console.log(sum)






let numbers = [100, 55, 20];
let sum2 = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(sum2 + '+' + numbers[i] + '=' + (sum2 + numbers[i]));
    sum2 += numbers[i];
}
