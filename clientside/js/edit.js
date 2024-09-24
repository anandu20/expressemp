const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
let profile;
async function getDonor() {
    const res=await fetch(`http://localhost:3000/api/getemploy/${id}`)
    const employ=await res.json();
    profile=employ.profile
    document.getElementById("frm").innerHTML=`
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${employ.name}">

            <label for="salary">Salary</label>
            <input type="number" id="salary" name="salary" value="${employ.salary}">

            <label for="experience">Experience</label>
            <input type="text" id="experience" name="experience" value="${employ.experience}">

            <label for="designation">Designation</label>
            <input type="text" id="designation" name="designation" value="${employ.designation}">

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value="${employ.phone}">

            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="${employ.email}">

             <div class="profile" id="prf">
                <img src="${profile}" class="proimg" id="proimg" alt="">
            </div>

            <label for="profile">Profile</label>
            <input type="file" id="profile" name="profile" onchange="pic()">

            <div class="buttons">
                <button >Submit</button>
                <button type="reset" >Reset</button>
            </div>
    `
}
getDonor()

document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    try {
        const name=document.getElementById("name").value;
    const salary=parseInt(document.getElementById("salary").value);
    const experience=document.getElementById("experience").value;
    const designation=document.getElementById("designation").value;
    const phone=parseInt(document.getElementById("phone").value);
    const email=document.getElementById("email").value;
    const res=await fetch(`http://localhost:3000/api/editemploy/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,salary,experience,designation,phone,email,profile})
    })
    if(res.status==201){
        alert("Updated")
        window.location.href="../index.html"
    }else{
        alert("error")
    }
    } catch (error) {
        console.log(error);
        
    }
})

async function pic() {
    

    console.log("hdi");
    console.log(document.getElementById("profile").files[0]);
    profile=await convertToBase64(document.getElementById("profile").files[0]);
    console.log(profile);
    document.getElementById("proimg").src=profile
}
function convertToBase64(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror= (error)=>{
            reject(error)
        }
    })
}