document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const email=document.getElementById("email").value;
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const cpassword=document.getElementById("cpassword").value;
    console.log(email,username,password,cpassword);
    fetch ("http://localhost:3000/api/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,username,password,cpassword})
    }).then(async(res)=>{
        console.log(res);
        if(res.status==201){
            alert("success");
            window.location.href="../pages/signin.html";
        }else if(res.status==404){
            const data=await res.json()
            alert(data.msg)
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);

    });
})