function sumItems(array) {
  // Sum all the numbers in the array[[1, 2, [[3], 4]], 5, []]
  let sum=0;
  array.forEach((item) => {
    console.log("item",item,"************")
    if (Array.isArray(item)) {
      // Print out all it's items individually
       
       console.log("if",sum,item);
       sum+=sumItems(item);
    } else {
        sum+=item;
        //console.log(item);
        console.log("else",sum,item);
    }
    
  })
  return sum;
}
//console.log(sumItems([1,2,3,4,5]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
module.exports = sumItems;