// ask the user name
const userName = prompt('What is your name?');

// ask the user surname
const userSurname = prompt('What is your surname?');

// ask the user favourite colour
let favColour = prompt('What is your favourite colour?');

// create the var combo in the console
console.log( `${userName}${userSurname}${favColour}93` );

// write the combo on the page
document.writeln(userName + userSurname + favColour + "93")
//or --> document.writeln( `${userName}${userSurname}${favColour}93` )
