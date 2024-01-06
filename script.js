let userscore = 0;
let compscore = 0;


const choices= document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const genCompchoice =()=>{
    //to gererate comp choice
    const options = ["rock","paper","scissor"];
    const index =Math.floor(Math.random()*3);
    return options[index];
}

const drawgame=()=>{
    console.log("DROW...");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("you win !");
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText =`you Win ! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        console.log("you lose..");
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText =`you lose .. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice)=>{
    // console.log("user choice :",userchoice);
    const compchoice = genCompchoice();
    console.log("comp choice :",compchoice);

    if(userchoice === compchoice){
        //draw condition
        drawgame();
    }
    else{
        let userwin = true;

        if(userchoice ==="rock"){
            //paper ,scissor
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice ==="paper"){
            // rock , scissor
            userwin = compchoice === "scissor" ? false : true;
        }
        else if(userchoice ==="scissor"){
            // rock , paper
            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin,userchoice,compchoice);
    }
   
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("user choice : ",userchoice);
        playgame(userchoice);
    })
})

