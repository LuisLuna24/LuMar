$(document).ready(function () {
    $("#heder_inicio").on("click", function(){
        location.href = "index.html";
    })
    $("#heder_servicios").on("click", function(){
        location.href = "Servicios.html";
    })
    $("#heder_productos").on("click", function(){
        location.href = "Productos.html";
    })
    $("#heder_publicidad").on("click", function(){
        location.href = "Publicidad.html";
    })
    $("#heder_web").on("click", function(){
        location.href = "Web.html";
    })
    AOS.init();
});