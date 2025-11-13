document.addEventListener("DOMContentLoaded",()=>{
    const cambioTema = document.getElementById('cambio-tema');
    const main=document.querySelector("main")
    let footer=document.querySelector("footer");
    let secciones=main.querySelectorAll("section");
    let contenedorPreciosGrid=document.getElementById("contenedor-precios-grid")
    let contenedorInstructores=document.getElementById("contenedor-instructores")
    let contenedorHorarios=document.getElementById("contenedor-horarios")
    let contenedorTestimonios=document.getElementById("contenedor-testimonios")
    let contenedorContactoInscripcion=document.querySelector("#contenedor-contacto-inscripcion");
    let footerDivs=footer.querySelectorAll("div")
    cambioTema.addEventListener('click', () => {
    cambioTema.classList.toggle('oscuro');
    secciones.forEach(function (seccion){
        seccion.classList.toggle("tema-oscuro")
        footer.classList.toggle("tema-oscuro")
        let articulosCCI=contenedorContactoInscripcion.querySelectorAll("article")
        if(seccion.classList.contains("tema-oscuro")){
            seccion.style.backgroundColor="#0f172a"
            seccion.querySelectorAll("p").forEach(function(p){
                p.style.color="#fff"
            })
            seccion.querySelectorAll("h2").forEach(function(h2){
                h2.style.color="#fff"
            })
            contenedorPreciosGrid.querySelectorAll("div").forEach(function(div){
                div.style.backgroundColor="#1e293b"
                div.querySelector("h4").style.color="#fff"
                div.querySelector("h3").style.color="#F97316"
                div.querySelectorAll("li").forEach(function(li){
                    li.style.color="#fff"
                })
            })
            contenedorInstructores.querySelectorAll("div").forEach(function(div){
                div.style.backgroundColor="#1e293b"
                div.querySelector("h4").style.color="#fff"
                div.querySelector("p").style.color="#fff"

            })

            contenedorHorarios.querySelectorAll("div").forEach(function(div){
                div.style.backgroundColor="#1e293b"
                div.querySelector("h5").style.color="#fff"
                div.querySelectorAll("p").forEach(function(p){
                    p.style.color="#fff"
                })
            })
            contenedorTestimonios.querySelectorAll("article").forEach(function(article){
                article.style.backgroundColor="#1e293b";
                article.querySelectorAll("p")[0].style.color="#fff"
                article.querySelectorAll("p")[1].style.color="#475569"
            })
            for(let i=0;i<articulosCCI.length;i++){
                if(i==0){
                    articulosCCI[0].style.backgroundColor="#1e293b"
                    articulosCCI[0].querySelectorAll("label").forEach(function(label){
                    label.style.color="#fff"})
                    articulosCCI[0].querySelectorAll("input").forEach(function(input){
                    input.style.color="#fff"
                    input.style.backgroundColor="#0f172a";
                    input.style.borderColor="#334155"
                    })
                    let select =articulosCCI[0].querySelector("select")
                    select.style.color="#fff"
                    select.style.backgroundColor="#0f172a";
                    select.style.borderColor="#334155"
                    select.querySelectorAll("option").forEach(function(option){
                        option.style.backgroundColor="#0f172a"
                        option.style.color="#fff"
                    })
                    let textarea= articulosCCI[0].querySelector("textarea")
                    textarea.style.backgroundColor="#0f172a"
                    textarea.style.color="#fff"
                    textarea.style.borderColor="#334155"
                    let button =articulosCCI[0].querySelector("a")
                    button.style.backgroundColor="#F97316"
                    button.style.borderColor="#F97316"
                }else{
                    articulosCCI[1].style.backgroundColor="#1e293b"
                    articulosCCI[1].querySelectorAll("label").forEach(function(label){
                        label.style.color="#fff"
                    })
                    articulosCCI[1].querySelectorAll("p").forEach(function(p){
                        p.style.color="#fff"
                    })
                }
                }
            footer.style.backgroundColor="#020617"
            footerDivs[0].querySelector("h5").style.color="#fff";
            footerDivs[0].querySelector("p").style.color="#475569";
            
        }else{
            seccion.style.backgroundColor="#f3f4f6"
            seccion.querySelectorAll("p").forEach(function(p){
                p.style.color="#475569"
            })
            seccion.querySelectorAll("h2").forEach(function(h2){
                h2.style.color="#000"
            })
            contenedorPreciosGrid.querySelectorAll("div").forEach(function(div){
                div.style.backgroundColor="#fff"
                div.querySelector("h4").style.color="#000"
                div.querySelector("h3").style.color="#1E3A8A"
                div.querySelectorAll("li").forEach(function(li){
                    li.style.color="#475569"
                })
            })
            contenedorInstructores.querySelectorAll("div").forEach(function(div){
                div.style.backgroundColor="#fff"
                div.querySelector("h4").style.color="#000"
                div.querySelector("p").style.color="#475569"

            })

            contenedorHorarios.querySelectorAll("div").forEach(function(div){
                div.style.backgroundColor="#fff"
                div.querySelector("h5").style.color="#000"
                div.querySelectorAll("p").forEach(function(p){
                    p.style.color="#475569"
                })
            })
            contenedorTestimonios.querySelectorAll("article").forEach(function(article){
                article.style.backgroundColor="#fff";
                article.querySelectorAll("p")[0].style.color="#000"
                article.querySelectorAll("p")[1].style.color="#475569"
            })
            
            for(let i=0;i<articulosCCI.length;i++){
                if(i==0){
                    articulosCCI[0].style.backgroundColor="#fff"
                    articulosCCI[0].querySelectorAll("label").forEach(function(label){
                    label.style.color="#000"})
                    articulosCCI[0].querySelectorAll("input").forEach(function(input){
                    input.style.color="#000"
                    input.style.backgroundColor="#fff";
                    input.style.borderColor="#f3f4f6"
                    })
                    let select =articulosCCI[0].querySelector("select")
                    select.style.color="#000"
                    select.style.backgroundColor="#f3f4f6";
                    select.style.borderColor="#f3f4f6"
                    select.querySelectorAll("option").forEach(function(option){
                        option.style.backgroundColor="#f3f4f6"
                        option.style.color="#000"
                    })
                    let textarea= articulosCCI[0].querySelector("textarea")
                    textarea.style.backgroundColor="#fff"
                    textarea.style.color="#000"
                    textarea.style.borderColor="#f3f4f6"
                    let button =articulosCCI[0].querySelector("a")
                    button.style.backgroundColor="#1e3a8a"
                    button.style.borderColor="#1e3a8a"
                }else{
                    articulosCCI[1].style.backgroundColor="#fff"
                    articulosCCI[1].querySelectorAll("label").forEach(function(label){
                        label.style.color="#000"
                    })
                    articulosCCI[1].querySelectorAll("p").forEach(function(p){
                        p.style.color="#475569"
                    })
                }
                }
            footer.style.backgroundColor="#f3f4f6"
            footerDivs[0].querySelector("h5").style.color="#475569";
            footerDivs[0].querySelector("p").style.color="#475569";
        }
    });
    
});

})