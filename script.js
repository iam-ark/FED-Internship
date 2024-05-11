const words=[ "delhi", "hyderabad", "noida", "bangalore", "chennai", "pune", "kolkata", "mumbai" ];
let randomIndex=Math.floor(Math.random()*words.length);
let selectedWord=words[randomIndex];
console.log(selectedWord);

let guessedList=[];

let displayWord="";

for(let i=0; i<selectedWord.length; i++){
    displayWord+="_ ";
}
document.getElementById("displayWord").textContent=displayWord;

function guessLetter(){
    let inputElement=document.getElementById("letter-input");

    if(!inputElement.value){
        alert("Empty. Please enter the letter");
        return;
    }
    
    let letter=inputElement.value.toLowerCase();
    inputElement.value="";

    if(guessedList.includes(letter)){
        alert("The letter has been guessed");
        return;
    }
    guessedList.push(letter);
    let updatedDisplay="";
    let allletterGuessed=true;
    for(let i=0; i<selectedWord.length; i++){
        if(guessedList.includes(selectedWord[i])){
            updatedDisplay+=selectedWord[i]+"";
        }
        else{
            updatedDisplay+="_ ";
            allletterGuessed=false;
        }
    }
    document.getElementById("displayWord").textContent=updatedDisplay;
    if(allletterGuessed){
        alert("Right Guess!");
    }
}