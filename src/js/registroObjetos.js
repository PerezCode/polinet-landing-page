$(function(){

    $("#circuloImagen").click(function() {
        $("input[type=file]").click();
    });

    $("#boton2").click(function(){
        let informacion = [];

        const tipo = $("form")[0].tipo.value;
        const celular = $("form")[0].celular.value;
        const descripcion = $("form")[0].descripcion.value;

        informacion.push(tipo)
        informacion.push(celular)
        informacion.push(descripcion)
        
        location.href = "registroObjetos.html?" + informacion.toString() + "";

    })
})