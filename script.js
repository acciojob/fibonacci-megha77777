function fibonacci(num) {
// your code here
	// let num = prompt("Enter a number")
// 	let num = Number.parseInt(num);
// 	let a=-1, b=1;
// 	for(let i=1; i<=num; i++){
// 		let c = a+b;
// 		b=c;
// 		a=b;
// 	}
// 	return c;
// }
	if(num <= 2){
		return num-1;
	}
	
	let n1 =0; // 1
	let n2 =1; // 2
	var next = 0; // 2
	var number = parseInt(num);
	for(i =3;i <=number ; i++){
		next = n1+n2;
		n1 = n2;
		n2 = next;
	
	}
	return next;
}
module.exports = fibonacci;
