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
    



//  clearHistoryBtn.addEventListener("click",()=>{
// callHistoryList.innerHTML=" ";
//  })
//  updateCoinDisplay();

let coins = 100; 
const coinDisplay = document.getElementById("coinDisplay");
const callHistoryList = document.getElementById("callHistory");
const clearHistoryBtn = document.getElementById("clearhistory");


function updateCoinDisplay() {
  coinDisplay.textContent = coins + " Coins";
}


document.querySelectorAll(".callBtn").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentNode; 

    
    const serviceName = card.children[0].innerText;
    const serviceNumber = card.children[1].innerText;

    if (coins < 20) {
      alert(" Not enough coins! You need at least 20 coins to make a call.");
      return;
    }
    coins -= 20;
    updateCoinDisplay();

    alert(` Calling ${serviceName} (${serviceNumber})`);

    const li = document.createElement("li");
    li.textContent = `${serviceName} - ${serviceNumber}`;
    callHistoryList.appendChild(li);
  });
});

clearHistoryBtn.addEventListener("click", () => {
  callHistoryList.innerHTML = "";
});

updateCoinDisplay();