const swal = window.sweetAlert;

$(() => {

  $("#mainForm").submit((e) => {
    e.preventDefault();
    const email = $("#registerEmail").val();
    const password1 = $("#password1").val();
    const password2 = $("#password2").val();

    if(password1 !== password2) {
      swal("Upss!", "😥 Las contraseñas no coinciden.", "error");
    } else {
      if(localStorage.getItem("usuariosPoliNet")) {
        const currentUsers = JSON.parse(localStorage.getItem("usuariosPoliNet"));
        const userExist = currentUsers.reduce((count, item) => {
          if(item.email === email) {
            return count + 1;
          }
          return count;
        }, 0);
        console.log("Pilleee: ", userExist);
        if(userExist > 0) {
          swal("Espera!", "😟 Ya existe una cuenta asociada con el correo electronico ingresado.", "warning");
        } else {
          currentUsers.push({email, password: password1})
          localStorage.setItem("usuariosPoliNet", JSON.stringify(currentUsers));
          swal("Perfecto!", "😃 Ahora estas registrado!", "success");
        }
      } else {
        localStorage.setItem("usuariosPoliNet", JSON.stringify([{email, password: password1}]));
        swal("Perfecto!", "😃 Ahora estas registrado!", "success");
      }
    }
    console.log("Datos actuales: ", JSON.parse(localStorage.getItem("usuariosPoliNet")));
  })
})