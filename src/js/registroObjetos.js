$(function(){

const imagePreview = document.getElementById('img-preview');
const barrita = document.getElementById('img-upload-bar');

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/servidor/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "zllegocx";

$("#img-uploader").on('change', async (e) => {

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress (e) {
                let progress = Math.round((e.loaded * 100.0) / e.total);
                console.log();
                barrita.setAttribute('value', progress);
            }
        }
    );
    imagePreview.src = res.data.secure_url;

    $("#img-uploader").addClass("quitarInput");
    $("#img-upload-bar").addClass("quitarInput");

});

var shieldHomeContainer = nodeCollection.SelectSingleNode("//img").Attributes["src"].Value;
console.log(shieldHomeContainer)

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