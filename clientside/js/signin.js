document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    console.log(email,password);
    fetch("http://localhost:3000/api/signin",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
    }).then(async (res)=>{
        console.log(res);
        if(res.status==200){
            alert("success");
            window.location.href="../index.html"
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