const greet = "Comming Soon";
const endTime = "15 April 2025 12:00";
const greeting = document.getElementById("top-greet").innerText = greet;
const endDate = document.getElementById("end-time").innerText = endTime;
const inputs = document.querySelectorAll("input");
// function return after timeout (footer section)
const gifts = () => {
      const wish = "Happy Birthday"
      document.getElementById("gif").innerText = wish;
};
// function to clock time (header) (main)
const count = () => {
      const end = new Date(endDate);
      const now = new Date();
      const diff = (end - now)/1000;
      if(diff< 0) return gifts();
      inputs[0].value = Math.floor(diff/3600/24);
      inputs[1].value = Math.floor(diff/3600)%24;
      inputs[2].value = Math.floor(diff/60)%60;
      inputs[3].value = Math.floor(diff%60);
};
// execute a function that call reapetade after 1second
setInterval(()=>{
   count();
},1000);
