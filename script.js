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
// copy count
const copyCountE=document.getElementById("copyCount");
let copyCount=0;
const copyButtons=document.querySelectorAll(".copyBtn");
copyButtons.forEach(btn => {
btn.addEventListener("click" , () =>{
   copyCount++ ;
    copyCountE.textContent = copyCount;

   const hotline = btn.parentNode.parentElement.querySelectorAll(".hotline").innerText;
 navigator.clipboard.writeText(hotline).then(() => {

   alert(`Copied: ${hotline}`);
   });

})
})

  //  call-coin-history

let coins = 100; 
const coinDisplay = document.getElementById("coinDisplay");
const callHistoryList = document.getElementById("callHistory");
const clearHistoryBtn = document.getElementById("clearHistory");


function updateCoinDisplay() {
  coinDisplay.textContent = coins;
}


document.querySelectorAll(".callBtn").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentNode.parentNode; 

    const serviceName = card.querySelector(".service").innerText;
    const serviceNumber = card.querySelector(".serviceNum").innerText;

    // const serviceName = card.children[0].innerText;
    // const serviceNumber = card.children[1].innerText;


    if (coins < 20) {
      alert(" Not enough coins! You need at least 20 coins to make a call.");
      return;
    }
    coins -= 20;
    updateCoinDisplay();
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    alert(` Calling ${serviceName}  (${serviceNumber})`);

    const li = document.createElement("li");
    li.textContent = `${serviceName} - ${serviceNumber} ${date} at ${time}`;
    callHistoryList.appendChild(li);
  });
});

clearHistoryBtn.addEventListener("click", () => {
  callHistoryList.innerHTML = "";
});

updateCoinDisplay();