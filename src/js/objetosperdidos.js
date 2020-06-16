$(function(){

    
    $("#perdi-algo").click(function(){
        location.href = "subpaginas/objetosPerdidos/registroObjetos.html?"
    })

    let fase1 = location.search.split("&");
    
    let posicion_1 = fase1[0].split("=")
    let posicion_2 = fase1[1].split("=")
    let posicion_3 = fase1[2].split("=")

    let tipo = posicion_1[1].replace("+"," ")
    let celular = posicion_2[1]
    let descripcion = posicion_3[1]

    $("#main").append(`<div class="recuadro-objeto d-block">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
            
            </div>
            <div class="col-md-3 text-center mt-4">
                <h1>${tipo}</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <p><strong>descripcion:</strong> ${descripcion.replace(/\+/g, " ")} </p>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <button class="objeto-encontrado" >Lo encontre</button>
        </div>
    </div>
</div>`     
        );

        $(".objeto-encontrado").click(function(){
            location.href = "subpaginas/objetosPerdidos/notificacionPropietario.html?" + celular.toString() + "";
        })

        
})