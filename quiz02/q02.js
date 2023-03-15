let nums = [10, 50, 88];

nums.filter((n) => {
  console.log(n > 10);
  return n > 10;
});

console.log(nums);
