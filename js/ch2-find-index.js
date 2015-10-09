var nums = [2,4,19,15,183,6,7,1,1,102];

//using findIndex function with callback function to find num > 100

var over = nums.findIndex(function(element){
	return (element >= 100);
});

console.log(over);

var numOver = nums.find(function(element){
	return (element >= 100);
});

console.log(numOver);