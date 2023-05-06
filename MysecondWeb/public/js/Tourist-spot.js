window.onload = () => {
    let a = document.getElementById("a1");
    a.style.backgroundColor = "white";
    a.style.borderRadius = "18px";
    a.style.color = "black";
}
let b = document.querySelector(".navbar");
b.style.borderBottom = "5px groove white";  
    
    document.getElementById("btn").addEventListener("click", () => {
    let a1 = document.getElementById("name").value
    let a2 = document.getElementById("contactno").value
    let a3 = document.getElementById("date").value
    let a4 = document.getElementById("select").value
    let a5 = document.getElementById("addr").value
    if(a1 == "" || a2 == "" || a3 == "" || a4 == 0 || a5 == ""){
        alert("All fields are required");
    }else{
        let ab = confirm("Are you sure want to download whatever data you have filled?");
        if(ab){
        alert("download succesfully");
        let dataObj = "Name: " + a1 + "\r\n" + "Contact: " + a2 + "\r\n" + "Date: " + a3 + "\r\n" + "Country: " + a4 + "\r\n" + "Address: " + a5 + "\r\n";
            
        const newBl = new Blob([dataObj] , {type : "text/plain"});
    
        let b = document.createElement("a");
        b.download  = new Date();
    
        b.href = window.URL.createObjectURL(newBl);
        document.body.appendChild(b);
    
        b.click();
        }else{
            alert("failed to download data");
        }
    }
})

