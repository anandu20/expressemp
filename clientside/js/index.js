async function getDonors() {
    const res=await fetch("http://localhost:3000/api/getemployees");
    const employees=await res.json();
    console.log(employees);
    str=``;
    employees.map((employ)=>{
        str+=`
        <a href="./pages/profile.html?id=${employ._id}">
            <div class="content">
                <div class="img">
                    <img src="${employ.profile}" alt="${employ.name}">
                </div>
                <div class="details">
                    <table> 
                        <tr>
                            <th>Emp-Name</th>
                            <th>Designation</th>
                        </tr>
                        <tr>
                            <td>${employ.name}</td>
                            <td>${employ.designation}</td>
                        </tr> 
                    </table>
                </div>
            </div>
        </a>
        `
    });
    document.getElementById("contents").innerHTML=str;
}
getDonors();


document.getElementById("filter").addEventListener('keyup',async(e)=>{
    try {
        const res=await fetch("http://localhost:3000/api/getemployees");
        const employees=await res.json();
        console.log(employees);
        str=``;
        employees.filter((i)=>i.name.toLowerCase().includes(e.target.value.toLowerCase())).map((employ)=>{
            console.log(employ._id);
            
            str+=`
            <a href="./pages/profile.html?id=${employ._id}">
            <div class="content">
                <div class="img">
                    <img src="${employ.profile}" alt="${employ.name}">
                </div>
                <div class="details">
                    <table> 
                        <tr>
                            <th>Emp-Name</th>
                            <th>Designation</th>
                        </tr>
                        <tr>
                            <td>${employ.name}</td>
                            <td>${employ.designation}</td>
                        </tr> 
                    </table>
                </div>
            </div>
        </a>
            `
        });
        document.getElementById("contents").innerHTML=str;

        } catch (error) {
            console.log(error);
        }
})