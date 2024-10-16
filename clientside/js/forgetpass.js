document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const email=document.getElementById("email").value;
    const res=await fetch("http://localhost:3000/api/otp",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email})
    });
    const result=await res.json();
    if(res.status==200){
        localStorage.setItem("email",`${result.email}`)
        window.location.href="../pages/getOtp.html";
    }
    else{
        alert(result.msg)
    }
});