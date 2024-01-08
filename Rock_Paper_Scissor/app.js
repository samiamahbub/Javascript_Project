let usersc=0;
let comsc=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const user_score_para=document.querySelector("#user-score");
const comp_score_para=document.querySelector("#c-score");

const gencomchoice =() =>{
    let opt=["rock","paper","scissor"];
    const randid=Math.floor(Math.random() * 3);
    return opt[randid];
}


const drawGame=()=>{
    console.log("game was draw");
    msg.innerHTML="game was draw";
    msg.style.backgroundColor = "black";
}

const showwinner = (userwin,choiceid,comchoice)=>{
    if(userwin){
        usersc++;
        user_score_para.innerText=usersc;
        msg.innerText=`You Win! ${choiceid} beats ${comchoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        comsc++;
        comp_score_para.innerText=comsc;
        msg.innerText=`You lose ${comchoice} beats your ${choiceid}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame=(choiceid)=>{
   //generate computer choice->modular
   const comchoice=gencomchoice();
   if(choiceid === comchoice)
   {
    //Draw Game
    drawGame();
   }
    else{
        let userwin=true;
        if(choiceid==="rock")
        {
            //scissors, paper
            userwin=comchoice==="paper" ? false : true;
        }
        else if(choiceid==="paper")
        {
            //rock, scissors
            userwin=comchoice==="scissor" ? false : true;
        }
        else{
             //rock, paper
            userwin=comchoice==="rock"? false:true;
        }
        showwinner(userwin,choiceid,comchoice)
        }
    };
   
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
        console.log("clicked",choiceid);
        playgame(choiceid);
        });
});