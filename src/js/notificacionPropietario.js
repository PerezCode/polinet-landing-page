$(function(){
    let celular = location.search.replace("?","")
    $("#numero").append(` ${celular}`)
})