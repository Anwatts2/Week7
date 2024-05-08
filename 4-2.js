// # create a function called full_name that takes in two parameters, first_name and last_name and returns the full name.
function full_name(first_name, last_name){ 
    return `${first_name} ${last_name}`;
};
// # call your function here
let name_result = full_name("Ashley","Watts");
console.log("The result of the full_name function is: ", name_result);

// # create a function called add that takes in two parameters, num1 and num2 and returns the sum of the two numbers.
function sum_num(num1, num2){
const sum = num1 + num2; 
return sum;
};
let sum_result = sum_num(9,7);
console.log("The result of the sum_nums function is: ", sum_result);
