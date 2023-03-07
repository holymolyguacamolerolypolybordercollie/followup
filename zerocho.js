const participants = document.querySelector(".select");
const orderSpan = document.querySelector(".order span");
let currentOrder = 1;
const wordSpan = document.querySelector(".game-word span");
const gameBtn = document.querySelector('.game-input');
const startBtn = document.querySelector(".start");
const gobackBtn = document.querySelector(".goBack");
const printfirst = document.querySelector(".printfirst");
const printlater = document.querySelector(".printlater");
const gameInput = document.querySelector('.game-input input[type="text"]');
let word;

startBtn.addEventListener("click",startGame);
gobackBtn.addEventListener("click",goback);


function startGame(){
    printfirst.classList.add("hidden")
    printlater.classList.remove("hidden")
    orderSpan.textContent = currentOrder;
    saveParticipants();
}

function saveParticipants(){
    let usernumber = participants.options[participants.selectedIndex].value;
    localStorage.setItem("participants",usernumber);

}

function goback(){
    printfirst.classList.remove("hidden")
    printlater.classList.add("hidden")
    localStorage.clear();
    gameInput.value='';
    wordSpan.innerText='';
    currentOrder = 1; 
}

gameBtn.addEventListener("submit",submission);

function submission(event){
    event.preventDefault();
    integrityCheck();
}

function integrityCheck(){
    newWord=gameInput.value;
    if(((!word)||(word[3] || newWord[1]))&& newWord.length === 3) {
        word=newWord
        wordSpan.innerText = word;
        changeOrder();
        gameInput.value='';
    }
    else {
        alert("븅신ㅋㅋ");
        wordSpan.innerText= "븅신 ㅋㅋ";
    }
    
    }


function changeOrder(){
    const totalUser = localStorage.getItem("participants");
    if(currentOrder +1 <= totalUser){
        currentOrder ++
        orderSpan.textContent = currentOrder;
    }
    else{
        currentOrder=1
        orderSpan.textContent = currentOrder;
    }
}