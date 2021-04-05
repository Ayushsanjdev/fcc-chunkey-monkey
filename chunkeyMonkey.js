function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for(let i = 0; i < arr.length;) {
    newArr.push(arr.splice(i, size)); 
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//[["a", "b"], ["c", "d"]];


//Problem:--------

//create a function named "chunkArrayInGroups"
//in which you divide the array into given no of parts
//in the second argument and
//lastly return that array (dimension array)

//Approach:------

//first creating function named "chunkArrayInGroups"
//which is created already anyway.
//inside the function we keep parameters arr and size
//second we will create an empty array
//third we run for loop through array but not increment it
// though we will push the spliced array of index with size to the newArr and then return it.
//.....
