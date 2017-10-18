/*
validate email
input: String
output: Boolean
source: 
- regex pattern: https://gist.github.com/fakiolinho/5438830
*/

const validateEmail = (str) => {
	const rgx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	return rgx.test(str);
};