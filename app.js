let gameseq = [] ;
let userseq = [] ;
let star = false;
let level = 0;


let btns = ["yellow","red","green","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("click", function (event) {
    if(!star && !event.target.classList.contains("btn")) 
    {
        star = true ;
        levelUp();
    } 
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp()
{
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    

    let renIdx = Math.floor(Math.random() * 4);
    let rendColor = btns[renIdx];
    let renbtn = document.querySelector(`.${rendColor}`);  
    gameseq.push(rendColor);
    btnFlash(renbtn);
}

function checkAns(idx) {

    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelUp,1000);
            
        }  
    }
    else {
        h2.innerHTML = `Game Over! Your Score <b>${level}</b> <br> Click anywhere to start`;;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }

}

function btnPress() {
    let btn = this ;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    
    checkAns(userseq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn) {
    btn.addEventListener("click",btnPress);
}

function reset() {

    star = false;
    gameseq = [];
    userseq = [];
    level = 0;
       
}








