let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgp = document.querySelector("#msgs");


let turn0 = true; //player x,player0

const win = [
    [0, 1, 2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msg.classList.add("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    
    if(turn0){ //player0
        box.innerText = "0";
        turn0 = false;
    }
    else{ //playerx
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled=true;

    checkWinner();
    });
    });
  

    const disableBoxes = () =>{
        for(let box of boxes){
            box.disabled=true;
        }
    };

    const enableBoxes = () =>{
        for(let box of boxes){
            box.disbled=false;
            box.innerText="";
        }
    };



    const showWinner=(Winner)=>{
        msgs.innerText = `Congratulation,Winner is ${Winner}`;
        msg.classList.remove("hide");
    };

    const checkWinner=()=>{
        for(pattern of win){
     let pos1 = boxes[pattern[0]].innerText;
     let pos2 = boxes[pattern[1]].innerText;
     let pos3 = boxes[pattern[2]].innerText;

     if(pos1 !=""  && pos2 !="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3)
            {
                showWinner(pos1);
            }
        }
        }
    };

newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);