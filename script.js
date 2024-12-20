var age = prompt("Enter your age: ");
if (age >= 18) {
    console.log("You are eligible to vote");
} else if (age < 18) {
    console.log("You are not eligible to vote.you are " + (age) + " years old.");
} else {
    console.log("Invalid input");
}