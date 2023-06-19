// select colors
const cols=3,rows=3

const colors=["#95bde5","#f15bb5","#00bbf9","#fb5607","#ff006e","#83338e","#3a86ff"]

// create elments

// select Elements
const containr=document.querySelectorAll(".container")
const items=document.querySelectorAll(".items")
const parint=document.querySelector(".parint")
 const closBtn=document.querySelector(".btns");
const modulIP=document.querySelector(".parint p");
const myscore=document.querySelector("#score");


let secore;
function update(){
    secore=0;
    secore.innerText="امتیازشما:0";
    sizebackcolor();

}

closBtn.addEventListener("click",startgame)
function startgame(){
    parint.classList.remove("show");
    update();
}


update();

function sizebackcolor(){
  const maincolor=colors[Math.floor(Math.random()*colors.length)];
   items.forEach(item=>item.style.backgroundColor=maincolor);
   const target=Math.floor(Math.random()*cols*rows);
   items[target].style.backgroundColor=lightercolor(maincolor,50)

items.forEach((item,number)=>{
if(target===number){
    item.removeEventListener("click",loselevel)
    item.addEventListener("click",nextlevel)
}else{
    item.removeEventListener("click",nextlevel)
    item.addEventListener("click",loselevel)
}
})

}

function lightercolor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));


}



function nextlevel(){
    secore++;
   myscore.innerHTML="امتیاز شما:"+ secore;
    sizebackcolor();
}
function loselevel(){
     modulIP.innerText=" امتیازشما: " + secore;
    parint.classList.add("show")
}