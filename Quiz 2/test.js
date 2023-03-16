let nums = [10, 50, 88];

nums.filter((n) => n > 10);

console.log(nums);

const fn = () => console.log("important function");

const another = fn;

another("another function");