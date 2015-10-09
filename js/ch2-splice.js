var charSets = ["ab","bb","cd","cc","ab","dd","ab"];

while(charSets.indexOf("ab") != -1){
	charSets.splice(charSets.indexOf("ab"),1,"**");
}


while(charSets.indexOf("**") != -1){
	charSets.splice(charSets.indexOf("**"),1);
}

console.log(charSets.toString());