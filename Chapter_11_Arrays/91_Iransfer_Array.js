let scores = [45, 82, 91, 60, 73];

  //MAP
 //map - tranform the every element , return a new array
 // A map will alaways return the number of element that you have
 //but based on the conditions , their value will be changed
 let grade = scores.map(s => s > 70 ? "Pass" : "Fail");
 console.log(grade);

 //FILTER
 //Only keep the element that condition will match;
 let passing = scores.filter(s => s > 70);
 console.log(passing);

 //reduce
 //accumulate to a single element
 let total = scores.reduce((sum , s) => sum + s, 0);
 console.log(total);


 //flat 
 //flatterns nested arrays
 let nested = [[1, 2], [3, 4], [5]];
 console.log(nested.flat());



