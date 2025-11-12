document.addEventListener("DOMContentLoaded",()=>{
    const cambioTema = document.getElementById('cambio-tema');
    const main=document.querySelector("main")
    let footer=document.querySelector("footer");
    let secciones=main.querySelectorAll("section");
    cambioTema.addEventListener('click', () => {
    cambioTema.classList.toggle('oscuro');
    secciones.forEach(function (seccion){
        seccion.classList.toggle("tema-oscuro")
        footer.classList.toggle("tema-oscuro")
        if(seccion.classList.contains("tema-oscuro")){
            seccion.style.backgroundColor="#000"
            footer.style.backgroundColor="#000"
        }else{
            seccion.style.backgroundColor="#f3f4f6"
            footer.style.backgroundColor="#f3f4f6"
        }
    });
    
});

})