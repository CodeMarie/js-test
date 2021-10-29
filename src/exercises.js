/* One for you one for me */

/* 
Implement a method divvyUp 

This method should be able to accept a string as an argument
 which will represent a name and return a new string

 If the name argument has been provided we should get a string like this:
"One for NAME, one for me."

If the name argument has not been provided we should get a string like this: 
"One for you, one for me."

for example: 

divvyUp("Linda")
should return 
"One for Linda, one for me."

and

divvyUp()
should return 
"One for you one for me."

*/

const divvyUp = (name) => {
  if (name) {
    return `One for ${name}, one for me.`;
  } else {
    return "One for you, one for me.";
  }
};
console.log(divvyUp());

module.exports = {
  divvyUp
};
