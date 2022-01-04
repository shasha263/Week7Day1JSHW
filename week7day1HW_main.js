//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string,dog_names){
    for(let i = 0; i < dog_names.length; i++){        
        if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase ())==true){
            return console.log(dog_names[i])        
        }
        else{
            console.log("No Matches")
        }
}}
findWords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","purple","dog"])



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

var given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1, 'even index')
        }
    }
    return arr    
}
console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))




//==================Codewar Problem #1 ==========//
/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.*/

function rps(p1,p2){
 
    if ((p1=='scissors' && p2=='paper') || (p1== 'paper' && p2=='rock' ) || (p1=='rock'  && p2=='scissors')) {
        console.log("Player 1 won!");
    }
    else if ((p1=='paper' && p2=='scissors') || (p1== 'rock'  && p2=='paper') || (p1=='scissors' && p2=='rock' )){
        console.log("Player 2 won!");
    }
    else {
        console.log("Draw!");
    }
    }
    
    rps('scissors', 'scissors');


//==================Codewar Problem #2 ==========//
/*Given a non-empty array of integers, return the result of multiplying the values together in order. 
*/

var Array = [1, 2, 5, 4];
var total=1;
for (var i = 0; i < Array.length; ++i) {
    total *= Array[i];
}
console.log(total);

