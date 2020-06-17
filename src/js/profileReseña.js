$(function(){

    $("#agregarReseña").click(function(){
        location.href = "subpaginas/reseñas/agregar.html?"
    })
    
    let info = location.search.split("&")
    console.log(info);
    
})