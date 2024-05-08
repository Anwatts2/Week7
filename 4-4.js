function sum(a, b) {
    return a + b;
}
function callback_wrapper(callback, a, b){
    const result = callback(a * 2, b * 2);
    const second_result = callback(a, b);
    return result - second_result;
}
console.log(callback_wrapper(sum, 1, 2));