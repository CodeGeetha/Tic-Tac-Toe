let btn=document.querySelectorAll(".button-option");
let restartbtn=document.getElementById('restart');
let msg=document.getElementById('print');
let playerX=true;
let count=0;
msg.innerHTML="Player X Turn"
let winningConditions=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];

btn.forEach((element) =>
    element.addEventListener('click',()=>{
        if(playerX){
            element.innerText="X";
            msg.innerHTML="Player O Turn"
            element.disabled=true;
            playerX=false;
        }
        else{
            element.innerText="O";
            msg.innerHTML="Player X Turn"
            element.disabled=true;
            playerX=true;
        }

        // counting increment to check draw
        count += 1;
        if(count === 9){
            drawfunction();
        }
        winchecker();
    })
);

const winchecker = () => {
    for(let i of winningConditions){
        let [element1,element2,element3]=[
            btn[i[0]].innerText,
            btn[i[1]].innerText,
            btn[i[2]].innerText,
        ];
        // check if elements are filled or not
        // and elements are same
        if(element1 != "" && element2 != "" && element3 != ""){
            if(element1==element2 && element2==element3){
                btn[i[0]].style.color="green";
                btn[i[1]].style.color="green";
                btn[i[2]].style.color="green";
                winfunction(element1);
            }
        }
    }
}

// WINFUNCTION
const winfunction =(letter)=>{
    disableButtons();
    if(letter=='X'){
        msg.innerHTML=" PLAYER X WINS"
    }
    else{
        msg.innerHTML=" PLAYER O WINS"
    }
}

// DRAWFUNCTON
const drawfunction=()=>{
    disableButtons();
    msg.innerHTML="ITS DRAW";
}

const disableButtons=()=>{
    btn.forEach((element)=>{
        element.disabled=true;
    })
}
restartbtn.addEventListener('click',()=>{
    count=0;
    playerX=true;
    msg.innerHTML="Player X Turn";
    btn.forEach((element)=>{
        element.style.color="rgb(255, 51, 0)";
        element.innerText="";
        element.disabled=false;
    })
})