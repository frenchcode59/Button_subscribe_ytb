const btnChange = document.querySelector(".btn")
const icone = document.querySelector("i")

btnChange.addEventListener("click",function ()  {
    console.log("bouton cliqué");
    btnChange.classList.toggle("abonne");
   if (btnChange.innerText === "Abonne") {
     btnChange.innerText = "Abonnez-vous!"
   }else{
    console.log("else");
        btnChange.innerText = "Abonne"
   }
})

icone.addEventListener("click",function () {
    console.log("icone cliqué");
    icone.classList.toggle("fa-solid");
    icone.classList.toggle("fa-face-smile");
    icone.classList.toggle("happy");
}); 