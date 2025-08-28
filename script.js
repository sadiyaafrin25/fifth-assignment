// heart-count//

const heartCountE=document.getElementById("heartCount");
let heartCount=0;
const heartButtons=document.querySelectorAll(".heartBtn");
heartButtons.forEach(btn => {
btn.addEventListener("click" , () =>{
    heartCount++ ;
    heartCountE.textContent = heartCount;
})
})

// copy count and hotline copy//

const copyCountE = document.getElementById("copyCount");
let copyCount=0;
const copyButtons = document.querySelectorAll(".copyBtn");
copyButtons.forEach(btn =>{
    btn.addEventListener("click" , ()=>{
         copyCount ++;
        copyCountE.textContent = copyCount ;
       
    })
    })
     const hotline = btn.parentElement.querySelector(".hotline").textContent.trim();
    navigator.clipboard.writeText(hotline).then(() => {
         alert(`copied : {hotline}`);
})

// coin call history//
 let coins = 100;
const coinDisplay = document.getElementById("coinDisplay");
 const callHistoryList = document.getElementById("callHistory");
 const clearHistoryBtn = document.getElementById("clearHistory");

 function updateCoinDisplay() {
      coinDisplay.textContent = coins + " Coins";
    }
 document.querySelectorAll("callBtn").forEach(button => {
    button.addEventListener("click", ()=>{
        const card = button.parentElement;
        const service = card.querySelector(".service").innerText;
        const serviceNum = card.querySelector(".serviceNum").innerText;

        if(coins<20){
            alert("Not Enough Coins !");
            return;
        }
        coins-=20;
        updateCoinDisplay();
        alert(`calling ${service} (${serviceNum})`);

        const li = document.createElement("li");
        li.textContent=`${service} - ${serviceNum}`;
        callHistoryList.appendChild(li);
    })
 })

 clearHistoryBtn.addEventListener("click",()=>{
callHistoryList.innerHTML=" ";
 })
 updateCoinDisplay();