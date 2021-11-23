let body = document.querySelector("#body");
let choosing = document.querySelector("#choosing");
let container2 = document.querySelector("#container-2");
let everything = document.querySelector("#everything");
let adviceContainer = document.querySelector("#adviceContainer");
let showRule = document.querySelector("#showRules");
let showHowItWorkss = document.querySelector("#showHowItWorks");

let card;
let riskTaker = 0; //used for telling if player is a risk taker
let notRiskTaker = 0;//used for telling if player is not a risk taker
const game = {
    cards:["2","3","4","5","6","7","8","9","10","K","Q","J","A"],
    cards2:["two","three","four","five","six","seven","eight","nine","ten","K","Q","J","A"],
    cardsValue:{"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"K":10,"Q":10,"J":10,"A":[1,11]},
    cardsValue2:{
    "https://grayhkamau.github.io/BlackJack-game/imgs/2.png":2,
    "https://grayhkamau.github.io/BlackJack-game/imgs/3.png":3,
    "https://grayhkamau.github.io/BlackJack-game/imgs/4.png":4,
    "https://grayhkamau.github.io/BlackJack-game/imgs/5.png":5,
    "https://grayhkamau.github.io/BlackJack-game/imgs/6.png":6,
    "https://grayhkamau.github.io/BlackJack-game/imgs/7.png":7,
    "https://grayhkamau.github.io/BlackJack-game/imgs/8.png":8,
    "https://grayhkamau.github.io/BlackJack-game/imgs/9.png":9,
    "https://grayhkamau.github.io/BlackJack-game/imgs/10.png":10,
    "https://grayhkamau.github.io/BlackJack-game/imgs/K.png":10,
    "https://grayhkamau.github.io/BlackJack-game/imgs/Q.png":10,
    "https://grayhkamau.github.io/BlackJack-game/imgs/J.png":10,
    "https://grayhkamau.github.io/BlackJack-game/imgs/A.png":[1,11]},
    you:{"div":"#you","scoreSpan":".youScore","images":".youImages","score":0},
    dealer:{"scoreSpan":".dealerScore","images":".dealerImages","score":0,},
    wins:{"score":0},
    losses:{"score":0},
    draws:{"score":0},
    hitButton:false,
    standButton:false,
    winner:false,
   }


// implementing luck or memory
container2.style.display = "none";
everything.style.display = "none";
adviceContainer.style.display = "none";
showRule.style.display = "none";
showHowItWorkss.style.display="none";

let startQuestion = document.createElement("p");
startQuestion.textContent = "how do you wish to start";
document.querySelector("#p").appendChild(startQuestion);
let memoryButton = document.createElement("button");
memoryButton.textContent = "Memory";
memoryButton.classList.add("btn");
memoryButton.classList.add("btn-secondary");
choosing.appendChild(memoryButton);
let luckButton = document.createElement("button");
luckButton.textContent = "Luck";
luckButton.classList.add("btn");
luckButton.classList.add("btn-secondary");
choosing.appendChild(luckButton)
let isMemoryButtonClicked = false;
let isLuckButtonClicked = false;
let isPlayButtonClicked = false;



//implementin luck logic
luckButton.addEventListener("click", ()=>{   //when you click the luck button
isLuckButtonClicked = true;
memoryButton.style.display = "none";
luckButton.style.display = "none"
startQuestion.style.display="none"
everything.style.display = "flex";
adviceContainer.style.display = "flex";
showRule.style.display = "block";
showHowItWorkss.style.display="block";
})

document.querySelector(".hit").addEventListener("click", hit);

document.querySelector(".stand").addEventListener("click", stand);

document.querySelector(".Deal").addEventListener("click", deal);

// hit button function
 function hit(){
    showCard(game.you);
    cardScore(game.you,card);
    bustLogic(game.you);
    game.hitButton = true;

    if(game.you["score"]===17 || game.you["score"]=== 18 || game.you["score"]=== 19 || game.you["score"]=== 20){
        if(game.standButton === false){
           riskTaker += 1;
        }
    }
 }

 // function for calculating each card's score
 function cardScore(activePlayer,card){
    if(card==="A"){
        if(activePlayer["score"] + game.cardsValue[card][1] <= 21){
           span = document.querySelector(activePlayer["scoreSpan"]);
           activePlayer["score"] += game.cardsValue[card][1];
           span.textContent = activePlayer["score"]
        }
        else{
           span = document.querySelector(activePlayer["scoreSpan"]);
           activePlayer["score"] += game.cardsValue[card][0];
           span.textContent = activePlayer["score"]
        }
    }
    else{
       span = document.querySelector(activePlayer["scoreSpan"]);
       activePlayer["score"] += game.cardsValue[card];
       span.textContent = activePlayer["score"]
}
}



//memory button logic
//selecting all images
const image2 = document.querySelector(".two");
const image3 = document.querySelector(".three");
const image4 = document.querySelector(".four");
const image5 = document.querySelector(".five");
const image6 = document.querySelector(".six");
const image7 = document.querySelector(".seven");
const image8 = document.querySelector(".eight");
const image9 = document.querySelector(".nine");
const image10 = document.querySelector(".ten");
const imageA = document.querySelector(".A");
const imageK = document.querySelector(".K");
const imageQ = document.querySelector(".Q");
const imageJ = document.querySelector(".J");
const imageArray = [image2.src,image3.src,image4.src,image5.src,image6.src,image7.src,image8.src,image9.src,image10.src,imageA.src,imageK.src,imageQ.src,imageJ.src];

memoryButton.addEventListener("click", ()=>{ //what happens when you click memory button
    isMemoryButtonClicked = true;
    document.querySelector(".hit").setAttribute("disabled","disabled");
    memoryButton.style.display = "none";
    startQuestion.style.display="none";
    luckButton.style.display = "none";
    container2.style.display = "block";
    document.querySelector("#btn").addEventListener("click", startButton)// play button
})

 //for preventing an image to appear twice
function startButton(){
    document.querySelector("#btn").style.display = "none";
    isPlayButtonClicked = true;

    //logic for preventing an image from appearing twice
    let imageCheckArray = [];
    let img2 = imageArray[Math.floor(Math.random()*13)]
    imageCheckArray.push(img2);
    image2.src = img2;

    let img3 = imageArray[Math.floor(Math.random()*13)];
    do{
        img3 = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(img3))
    imageCheckArray.push(img3);
    image3.src = img3;

    let img4 = imageArray[Math.floor(Math.random()*13)];
    do{
        img4 = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(img4))
    imageCheckArray.push(img4);
    image4.src = img4;

    let img5 = imageArray[Math.floor(Math.random()*13)];
    do{
        img5 = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(img5))
    imageCheckArray.push(img5);
    image5.src = img5;

    let img6 = imageArray[Math.floor(Math.random()*13)];
    do{
        img6 = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(img6))
    imageCheckArray.push(img6);
    image6.src = img6;

    let img7 = imageArray[Math.floor(Math.random()*13)];
    do{
        img7 = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(img7))
    imageCheckArray.push(img7);
    image7.src = img7;

    let img8 = imageArray[Math.floor(Math.random()*13)];
    do{
        img8 = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(img8))
    imageCheckArray.push(img8);
    image8.src = img8;

    let img9 = imageArray[Math.floor(Math.random()*13)];
    do{
        img9 = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(img9))
    imageCheckArray.push(img9);
    image9.src = img9;

    let img10 = imageArray[Math.floor(Math.random()*13)];
    do{
        img10 = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(img10))
    imageCheckArray.push(img10);
    image10.src = img10;

    let imgA = imageArray[Math.floor(Math.random()*13)];
    do{
        imgA = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(imgA))
    imageCheckArray.push(imgA);
    imageA.src = imgA;

    let imgK = imageArray[Math.floor(Math.random()*13)];
    do{
        imgK = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(imgK))
    imageCheckArray.push(imgK);
    imageK.src = imgK;

    let imgQ = imageArray[Math.floor(Math.random()*13)];
    do{
        imgQ = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(imgQ))
    imageCheckArray.push(imgQ);
    imageQ.src = imgQ;

    let imgJ = imageArray[Math.floor(Math.random()*13)];
    do{
        imgJ = imageArray[Math.floor(Math.random()*13)]
    }
    while(imageCheckArray.includes(imgJ))
    imageCheckArray.push(imgJ);
    imageJ.src = imgJ;

    countDown();
}


let frontImgs = document.querySelectorAll(".frontImg"); //selecting all front images
let backImgs = document.querySelectorAll(".backImg"); //selecting all back images(the cards)

//countdown function reveals all the card for 5 seconds and it does a countdown
function countDown(){
for(let i = 0; i<frontImgs.length; i++){
    frontImgs[i].attributes[0].nodeValue = backImgs[i].attributes[0].nodeValue;
} 

let pCount = document.createElement("p");
pCount.style.color ="red";
pCount.classList.add("pCount");
body.appendChild(pCount);

function counting(time){
    return new Promise((resolve)=>{
        setTimeout((resolve),time);
    })
}
async function done(){
   alert("you have 4 seconds to memorize the cards!!!");
   container2.style.opacity = 0.4;
   pCount.textContent = 4;
   await counting(1000);
   pCount.textContent = "";
   pCount.textContent = 3;
   await counting(1000);
   pCount.textContent = "";
   pCount.textContent = 2;
   await counting(1000);
   pCount.textContent = "";
   pCount.textContent = 1;
   await counting(1000);
   pCount.textContent = "";
   pCount.toggleAttribute("class")
   container2.style.opacity = 1;
   everything.style.display = "flex";
   adviceContainer.style.display = "flex";
   showRule.style.display = "flex";
   showHowItWorkss.style.display = "flex";
}
done()
    .then(()=>{
        setTimeout(()=>{
            for(let i = 0; i<frontImgs.length; i++){
                frontImgs[i].attributes[0].nodeValue = "./imgs/blackjack-board2..jpg"
            }  
        },0000)
})
}

//function for showing cards in memory
let cardArray = [];
function imageClick(box){
         memoryCardShow(box);
         memoryCardScore();
         bustLogic(game.you);
         if(game.you["score"]===17 || game.you["score"]=== 18 || game.you["score"]=== 19 || game.you["score"]=== 20){
            if(game.standButton === false){
               riskTaker += 1;
            }
        }
}

function memoryCardShow(box){
    if(isMemoryButtonClicked===true){
        if(game.you["score"] < 21){
            box.style.transform = "rotateY(180deg)";
            img = document.createElement("img");
            card = box.children[1].children[0].attributes.src.value;
            console.log(card);
            img.src = card;
            img.style.height = "100px";
            img.style.margin = "10px";
            Images = document.querySelector(game.you["images"]);
            Images.appendChild(img);
         }
    }
}
function memoryCardScore(){
    if(card==="https://grayhkamau.github.io/BlackJack-game/imgs/A.png"){
        if(game.you["score"] + game.cardsValue2[card][1] <= 21){
            span = document.querySelector(game.you["scoreSpan"]);
            game.you["score"] += game.cardsValue2[card][1];
            span.textContent = game.you["score"]
        }
        else{
            span = document.querySelector(game.you["scoreSpan"]);
            game.you["score"] += game.cardsValue2[card][0];
            span.textContent = game.you["score"]
            }
    }
    else{
        span = document.querySelector(game.you["scoreSpan"]);
        game.you["score"] += game.cardsValue2[card];
        span.textContent = game.you["score"]
    }
} 


 //stand button function for bot player
 async function stand() {
    if(game.you["score"]===17 || game.you["score"]=== 18 || game.you["score"]===19 || game.you["score"] === 20){
         notRiskTaker += 1;
         riskTaker -= 1;
     }

    console.log(`risk taker: ${riskTaker}`)
    console.log(`not risk taker: ${notRiskTaker}`);

    if(game.you["score"] === 0){
      alert("you need to hit first!")
    }
    else{
        while(game.dealer["score"]< 15){
            showCard(game.dealer);
            cardScore(game.dealer,card);
            bustLogic(game.dealer); 
            await wait();
    }
    if(game.dealer["score"] >= 15){
        game.standButton = true;
        winnerLogic();
        if(riskTaker === 2){
            alert("you are a real risk taker aren't you?")
        }
        else if(notRiskTaker===2){
            alert("you are not a risk taker are you?")
        }
    }
}
}
 function wait() {
    return new Promise((resolve,reject)=>{
    setTimeout((resolve),1000);
    })
}

 
//risktakeR logic
function riskTakerLogic(){
  return  alert("you are a real risk taker")
}
function NotriskTakerLogic(){
    return  alert("you are a real risk taker")
  }
if(riskTaker === 1){
    riskTakerLogic();
}
if(notRiskTaker === 1){
    NotriskTakerLogic();
}



 

//deal button function
 function deal(){
    if(isLuckButtonClicked===true){
        if(game.hitButton===false && game.standButton===false){
        alert("you can only deal after both players have played");
        }
        else if(game.hitButton===true && game.standButton===true){
        dealLogic();
        }
    }
    else if(isMemoryButtonClicked===true){
            if(game.standButton===false){
                alert("you can only deal after both players have played")
            }
            else{
            let allFlipBox = document.querySelectorAll(".flip-box-inner");
            for(let i =0; i<allFlipBox.length; i++){
                allFlipBox[i].style.transform = "rotateZ(180deg)";
            }
            startButton();
            dealLogic();
            }
    }        
}

// show card for luck
function showCard(activePlayer){
    if(activePlayer["score"] < 21){
        img = document.createElement("img");
        card =  game.cards[Math.floor(Math.random()*13)];
        if(card==="A"){
            if(activePlayer["score"] + game.cardsValue[card][1] <= 21){
                cardArray.push(game.cardsValue["A"][1]);
            }
            else if(activePlayer["score"] + game.cardsValue[card][1] > 21){
                cardArray.push(game.cardsValue["A"][0]);
            }
        }
        else{
            cardArray.push(game.cardsValue2[card]);
        }
        // console.log(cardArray)
        img.src = `./imgs/${card}.png`;
        img.style.height = "100px";
        img.style.margin = "10px";
        Images = document.querySelector(activePlayer["images"]);
        Images.appendChild(img);
     }
 }



//function for bust logic
function bustLogic(activePlayer){
    if(activePlayer["score"] > 21){
        document.querySelector(activePlayer["scoreSpan"]).textContent="BUST";
        document.querySelector(activePlayer["scoreSpan"]).style.color="red";
    }
}


//function for figuring out and displaying the winner
function winnerLogic(){
    if(game.you["score"] <= 21){
    if(game.you["score"] > game.dealer["score"]){
         document.querySelector(".message").textContent = "you Won";
         document.querySelector(".message").style.color="green";
         game.wins["score"]++;
    }
    if(game.dealer["score"] > 21){
        document.querySelector(".message").textContent = "you Won";
        document.querySelector(".message").style.color="green";
         game.wins["score"]++;
    }
    if(game.dealer["score"]<=21 && game.you["score"]< game.dealer["score"]){
        document.querySelector(".message").textContent = "you Lost";
        document.querySelector(".message").style.color="red";
         game.losses["score"]++;
    }
    if(game.dealer["score"]===game.you["score"]){
        document.querySelector(".message").textContent = "you Drew";
        document.querySelector(".message").style.color="black";
         game.draws["score"]++;
    }
    }
     else if(game.you["score"]>21 && game.dealer["score"]<=21){
        document.querySelector(".message").textContent = "you Lost";
        document.querySelector(".message").style.color="red";
         game.losses["score"]++;
    }
    else if(game.you["score"]>21 && game.dealer["score"]>21){
        document.querySelector(".message").textContent = "you Drew";
        document.querySelector(".message").style.color="black";
        game.draws["score"]++;
    }
    document.querySelector(".wins").textContent = game.wins["score"];
    document.querySelector(".losses").textContent = game.losses["score"];
    document.querySelector(".draws").textContent = game.draws["score"];
}

 //deal button function
 function dealLogic(){
    cardArray = [];
    document.querySelector(game.you["scoreSpan"]).textContent="";
    document.querySelector(game.dealer["scoreSpan"]).textContent="";
    document.querySelector(game.you["scoreSpan"]).style.color="white";
    document.querySelector(game.dealer["scoreSpan"]).style.color="white";
    document.querySelector(".message").textContent = "lets play";
    document.querySelector(".message").style.color = "black";

    dealerImages = document.querySelector(".dealerImages").querySelectorAll("img");
    for(i=0;i<dealerImages.length; i++){
        dealerImages[i].remove();
    }

    youImages = document.querySelector(".youImages").querySelectorAll("img");
    for(i=0;i<youImages.length; i++){
        youImages[i].remove();
    }

        game.dealer["score"]= 0;
        game.you["score"]= 0;

        game.hitButton = false;
        game.standButton = false;
 }

//advice logic
document.querySelector("#advice").addEventListener("click", advice);//selecting advice button
function advice(){ //advice logic
    if(21-game.you.score >= 10){
        alert(`since your score is ${game.you.score}, the probability that the next card will get you over 21 is 0..so it is safe to hit`);
    }
    else if(21-game.you.score <= 5 && 21-game.you.score !== 0){
      alert(`based on your score, if you hit again, the probability that you will score 21 or a number less than that is pretty low, so, I wouldn't hit again if i were you`);
    }
    else if(21-game.you.score===6){
       alert(`if you hit the probability that you will bust is the same as the probability that you will score 21 or under..so thats your decision to make`);
    }
    else if(21-game.you.score===7||8){
        alert(`if you hit, the probability that you will score 21 or under is slightly higer than the probability that you will bust..so thats your decision to make`);
    }
    else if(21-game.you.score===9){
        alert(`the probability that you will score 21 or under is pretty decent...You should probably hit`);
    }
    else if(21-game.you.score===0){
        alert(`things are looking good for you, you'll probably win this round`);
    }
}



//show rules
showRule.addEventListener("click", rules);
showRule.addEventListener("click", check);

function check(){
    showRule.setAttribute("disabled","disabled")
    showHowItWorkss.setAttribute("disabled","disabled")
}

  
function rules(){
    let mainDiv= document.createElement("div");
    mainDiv.classList.add("card");
    let h = document.createElement("h2");
    h.textContent = "rules"
    h.classList.add("card-header");
    mainDiv.appendChild(h);

    let rulediv = document.createElement("div");
    rulediv.classList.add("card-body")
    mainDiv.appendChild(rulediv);

    let rulesList = document.createElement("ul");
    rulesList.classList.add("card-text")
    rulesList.innerHTML = "<li>You can't pick another card if you bust</li><li>first you play(hit), then the dealer plays</li><li>you cannot deal before both you and the dealer plays</li>"
    rulediv.appendChild(rulesList);
    everything.appendChild(mainDiv)

    let removeButton = document.createElement("button");
    removeButton.textContent = "Got it"
    removeButton.classList.add("btn");
    removeButton.classList.add("btn-primary");
    mainDiv.appendChild(removeButton)
    removeButton.addEventListener("click", ()=>{
        showRule.toggleAttribute("disabled");
        showHowItWorkss.toggleAttribute("disabled");
        mainDiv.classList.replace("card", "rulesRemove");
    })
}




//show how it works
showHowItWorkss.addEventListener("click", showHowItWorks)
showHowItWorkss.addEventListener("click", check2)

function check2(){
    showRule.setAttribute("disabled","disabled")
    showHowItWorkss.setAttribute("disabled","disabled")
}

function showHowItWorks(){
    let mainDiv= document.createElement("div");
    mainDiv.classList.add("card");

    let h2 = document.createElement("h2");
    h2.textContent = "How it works"
    h2.classList.add("card-header")
    mainDiv.appendChild(h2);

    let instrusctionsDiv = document.createElement("div");
    instrusctionsDiv.classList.add("card-body")
    mainDiv.appendChild(instrusctionsDiv);

    let p = document.createElement("p");
    p.classList.add("card-text")
    p.style.width = "400px"
    p.textContent = "Basically this is a game with 13 cards, each card having a value. You have access to all the 13 cards, but you can only choose one card randomly(if you choose to play LUCK) or by testing how good you can memorize(if you choose to play MEMORY). When you choose a card, the value of that card becomes your score so far. If you choose another card, it adds the value of the current card to that of the previous one. But your cards total should not cross 21, if they do you have BUSTED, so you can't pick another card. Now if you bust or if you want to go ahead with the score that you have, its time for the dealer to play. If you are done with a round and want to play another round, just press deal."
    instrusctionsDiv.appendChild(p);
    everything.appendChild(mainDiv);


//show winner logic
    let winnerDiv = document.createElement("div");
    winnerDiv.classList.add("card");
    mainDiv.appendChild(winnerDiv);

    let hWin = document.createElement("h2");
    hWin.textContent = "Wins, loses and draws logic "
    hWin.classList.add("card-header")
    winnerDiv.appendChild(hWin);
    
    let logicDiv = document.createElement("div");
    logicDiv.classList.add("card-body")
    winnerDiv.appendChild(logicDiv);

    let p1 = document.createElement("p");
    p1.classList.add("card-text")
    p1.textContent = "If you bust and the dealer busts, its a draw"
    logicDiv.appendChild(p1);

    let p2 = document.createElement("p");
    p2.classList.add("card-text")
    p2.textContent = "If your score is the same as the dealer's and you're both under 21, its a draw"
    logicDiv.appendChild(p2);

    let p3 = document.createElement("p");
    p3.classList.add("card-text")
    p3.textContent = "If the dealer busts but you don't, you won"
    logicDiv.appendChild(p3);

    let p4 = document.createElement("p");
    p4.classList.add("card-text")
    p4.textContent = "If both scores are under 21 but your score is higher than that of the dealer, you won"
    logicDiv.appendChild(p4);

    let p5 = document.createElement("p");
    p5.classList.add("card-text")
    p5.textContent = "If you busts but the dealer doesn't, you lose"
    logicDiv.appendChild(p5);

    let p6 = document.createElement("p");
    p6.classList.add("card-text")
    p6.textContent = "If both scores are under 21 but your score is less than that of the dealer, you lose"
    logicDiv.appendChild(p6);

    everything.appendChild(mainDiv);

    
    let removeButton = document.createElement("button");
    removeButton.textContent = "Got it";
    removeButton.classList.add("btn");
    removeButton.classList.add("btn-primary");
    mainDiv.appendChild(removeButton);
    removeButton.addEventListener("click", ()=>{
    mainDiv.classList.replace("card", "rulesRemove");
    showRule.toggleAttribute("disabled");
    showHowItWorkss.toggleAttribute("disabled");
    })
}

