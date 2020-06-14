$(function(){

    $("#perdi-algo").click(function(){
        location.href = "./subpaginas/registroObjetos.html?"
    })

    $("#boton2").click(function(){
        
        location.href = "objetosperdidos.html?"

        //aun no habilitado 
        $("#main").append(`<div class="recuadro-objeto d-block">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                <img src="./images/objetosperdidos/saco.jpg" alt="imagen saco">
                </div>
                <div class="col-md-3 text-center mt-4">
                    <h1>Buzo adidas</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <p><strong>descripcion:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est molestias quibusdam maxime </p>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <button id="objeto-encontrado" >Lo encontre</button>
            </div>
        </div>
    </div>`     
            );
    })
})