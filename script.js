function calculateGrade(percentage) {
	let x=percentage;
	if(x>=90){
		alert(`A`);
	}
	else if(x>=80 && x<=89){
		alert(`B`);
	}
	else if(x>=70 && x<=79){
		alert(`C`);
	}
	else if(x>=60 && x<=69){
		alert(`D`);
	}
	else{
		alert(`F`);
	}
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
