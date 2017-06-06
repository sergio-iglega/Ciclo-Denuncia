
function validateForm() {
    var x1=document.reg.Password.value;
    var x2=document.reg.RPassword.value;
    if (x2 == x1){
       alert("Usuario creado correctamente");
    }
    else{alert("Las contraseñas no son idénticas, Vuelve a introducir la contraseña");}
}

function validateMen() {
    alert("Mensaje enviado correctamente, en breve nos pondremos en contacto con usted");
}

function validateDen() {
    alert("Denuncia realizada correctamente");
}
