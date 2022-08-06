const reverseString = (string) => {
	if (string.length === 0 || typeof(string) !== 'string') {
		return '';
	} else {
		return string.split("").reverse().join("");
	}
}

export default reverseString;