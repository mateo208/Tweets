const inputname = document.getElementById("Name");
const tecomment = document.getElementById("Comment");
const userprofile = document.getElementById("p-profile");
const nameproflile = document.getElementById("name-profile");
const contador = document.getElementById("Contador");
const resultComment = document.getElementById("Result-Comment");
const btnpublic = document.getElementById("Btn-Public");
const btmayuscula = document.getElementById("Btn-Mayuscula");
const btnminuscula = document.getElementById("Btn-Minuscula");


// function capatalizar(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// capatalizar(tecomment.value);

btnpublic.addEventListener("click", () => {
    nameproflile.textContent = inputname.value.trim().charAt(0).toUpperCase();
    userprofile.textContent = inputname.value.trim();
    let counter = 280;
    let cantidad= contador.textContent = counter - tecomment.value.length;
     resultComment.innerHTML  =  tecomment.value;

    if (cantidad < 50) {
        contador.style.color = "red";
    }else{
        contador.style.color = "while";
    }
});
//BOTON MAYUSCULA
btmayuscula.addEventListener("click", () => {
    resultComment.textContent = tecomment.value.toUpperCase();
});
//BOTN MINUSCULA
btnminuscula.addEventListener("click", () => {
    resultComment.textContent = tecomment.value.toLowerCase();
});


inputname.addEventListener("keyup", (Event) => {
    if (Event.code === "Enter") {
        nameproflile.textContent = inputname.value.trim().charAt(0).toUpperCase();
        userprofile.textContent = inputname.value.trim();
    }
});


tecomment.addEventListener("keyup", (Event) => {
    let total = 280;
    if (Event.code === "Enter") {
       let valor = contador.textContent = total - tecomment.value.length;
        resultComment.innerHTML = tecomment.value;

        if (valor < 50) {
            contador.style.color = "red";
        }else{
            contador.style.color = "while";
        }
    }
});