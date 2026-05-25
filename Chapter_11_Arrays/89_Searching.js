let results = ['pass', 'fail', 'pass', 'error', 'fail'];

////indexOf - return the first index or -1 if ot found;
results.indexOf('fail');  //1
console.log(results);
results.indexOf('skip'); // -1
console.log(results);

//lastIndexOf - searching from the end
results.lastIndexOf('fails'); //4
console.log(results);

//find  returns first matching element
let nums = [10, 25, 30, 45];
nums.find(x => x > 20); // 25, 30, 45
console.log(nums);

//finIndex
nums.findIndex(n => n > 20);
console.log(nums);