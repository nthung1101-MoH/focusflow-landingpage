// ==========================================================================
// 1. ĐỒNG HỒ ĐẾM NGƯỢC TẠO FOMO (15 PHÚT)
// ==========================================================================
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

// ==========================================================================
// 2. XỬ LÝ FORM & TỰ ĐỘNG CHUYỂN HƯỚNG SANG APP
// ==========================================================================
const leadForm = document.getElementById('lead-form');

leadForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    alert(`Chúc mừng ${name}! Hệ thống đã ghi nhận email: ${email}. Chúng tôi sẽ chuyển bạn đến Trạm làm việc FocusFlow ngay bây giờ!`);
    
    window.location.href = 'https://focusflow-landingpage-pied.vercel.app/;
});