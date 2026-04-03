const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click" , function(e){
    e.preventDefault();
    const phone = 1234567890;
    const pin = 1234;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const pinNumber = document.getElementById("pinNumber").value;
    if(phone === Number(phoneNumber) && pin === Number(pinNumber))
    {
        window.location.href= "../main.html"
    }
    else{
        alert("follow the place holder")
    }
})