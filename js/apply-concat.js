var fruitarray = [];
fruitarray[0] = ['strawberry','orange'];
fruitarray[1] = ['lime','peach','banana'];
fruitarray[2] = ['tangerine','apricot'];
fruitarray[3] = ['raspherry','kiwi'];

//flatten array

var newArray = fruitarray.concat.apply([],fruitarray);

console.log(newArray);

