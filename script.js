function fibonacci(num) {
// your code here
	// let num = prompt("Enter a number")
	let num = Number.parseInt(num);
	let a=-1, b=1;
	for(let i=1; i<=num; i++){
		let c = a+b;
		b=c;
		a=b;
	}
	return c;
}
module.exports = fibonacci;
