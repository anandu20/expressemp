function submitPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === confirmPassword && password.length >= 6) {
        errorMessage.textContent = '';
        const email=localStorage.getItem("email");
        fetch("http://localhost:3000/api/resetpassword",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        }).then(async (res)=>{
            const result=await res.json();
            if(res.status==200){
                localStorage.removeItem("email")
                window.location.href="../index.html"
            }else if(res.status==404){
                alert(result.msg)
            }
            else{
                alert("error")
            }
            
        }).catch((error)=>{
            console.log(error);
            
        });
        // Add your form submission logic here
    } else if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
    } else {
        errorMessage.textContent = 'Passwords do not match.';
    }
}