

let startingMinutes = 15; 
let time = startingMinutes * 60; 


const timerElement = document.getElementById('timer');


const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    let minutes = Math.floor(time / 60); 
    let seconds = time % 60; 

   
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    
    timerElement.innerHTML = `${minutes}:${seconds}`;
    
    time--; 

    
    if (time < 0) {
        clearInterval(countdownInterval);
        timerElement.innerHTML = "HẾT HẠN!";
        timerElement.style.color = "#64748b"; 
    }
}


const leadForm = document.getElementById('lead-form');


leadForm.addEventListener('submit', function(event) {
    
    
    event.preventDefault(); 

    
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    
    alert(`Chúc mừng ${name}! Hệ thống đã ghi nhận email: ${email}. Link tải app FocusFlow bản Beta đã được gửi đi!`);
    
    
    leadForm.reset();
});