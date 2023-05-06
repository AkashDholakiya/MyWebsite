const a = document.querySelector('.navbar');
a.style.borderBottom = "5px groove white";

window.onload = () => {
    let a = document.getElementById('a3');
    a.style.backgroundColor = "white";
    a.style.color = "black";
    a.style.borderRadius = "24px";
}

let b = document.createElement("button");
let c = document.createTextNode("let's journey begin");
b.appendChild(c);
document.getElementById("main-1").appendChild(b);

let y = document.getElementById("main-1");
y.addEventListener("click", () => {
    window.location.href = "../view/Tourist-spot.html";
})


