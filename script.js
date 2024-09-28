let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbutton");
let newgBtn=document.querySelector("#newbtn");
let msgcont=document.querySelector(".msg-container");
let msga=document.querySelector("#msg");
let turnO=true;
let c=0;

const winning=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]

];
const resetGame=()=>{
    turnO=true;
    c=0;
    enableBoxes();
    msgcont.classList.add("hide");

};
boxes.forEach((box)=>{

    box.addEventListener("click",()=>{
        
        if(turnO==true){
            box.innerText="A"; turnO=false;
        }
        else{ box.innerText="B"; turnO=true;}
        c++;
        box.disabled=true;
        checkWinner();
        if(c===9 && !checkWinner()){
            show();
        }
       
    } );
});



const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
 box.innerText="";
    }
};
const showWinner=(winner)=>{

    msga.innerText=`Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
};

const show=()=>{

    msga.innerText=`Match is Draw`;
    msgcont.classList.remove("hide");
    disableBoxes();
};

checkWinner=()=>{
    for(let pattern of winning){
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
        if(  pos1===pos2 && pos2===pos3){
          
            showWinner(pos1);
            return true;
            
        }}
        
    }
}





newgBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);