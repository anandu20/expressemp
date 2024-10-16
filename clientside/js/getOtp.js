function moveToNext(current,nextId){
    if(current.value.length >=1){
        document.getElementById(nextId).focus();
        
    }
}

async function submitOTP() {
    let otp = '';
    for (let i = 1; i <= 6; i++) {
        otp += document.getElementById('input' + i).value;
    }

    const errorMessage = document.getElementById('error-message');
    if (otp.length === 6 && /^\d+$/.test(otp)) {
        errorMessage.textContent = '';
        // You can add your form submission logic here
    } else {
        errorMessage.textContent = 'Please enter a valid 6-digit OTP.';
    }
    const email=localStorage.getItem("email");
    console.log(email);
    const res=await fetch("http://localhost:3000/api/otpcheck",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,otp})
    });
    const result=await res.json();
    if(res.status==200){
        alert(result.msg);
        window.location.href="../pages/resetpass.html";
    }else{
        alert(result.msg);
    }
}



