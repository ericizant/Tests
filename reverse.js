function reverse(input){
    if(typeof input !== "string"){
        return "You must enter words!";
    }
    let output = input.split(" ").reverse();
    return output.join(" ");
}

//Input Test Cases

//Test Case #1
console.log(("Case #1: ") + (reverse("this is a test")));

//Test Case #2
console.log(("Case #2: ") + (reverse("foobar")));

//Test Case #3
console.log(("Case #3: ") + (reverse("all your base")));

//Test Case 4 (demonstrates incorrect input of numbers instead of words
console.log(("Case #4: ") + (reverse(1, 2, 3)));


module.exports = reverse