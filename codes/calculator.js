class Calculator {
	constructor() {}

	add(num1, num2) {
		return num1 + num2;
	}
	minus(num1, num2) {
		return num1 - num2;
	}
	multiply(num1, num2) {
		return num1 * num2;
	}
	divide(num1, num2) {
		return (num2 === 0) ? null: num1/num2;
	}
}

export default Calculator;

