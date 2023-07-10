
function log(){
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="" && pass==""){
    

    alert("Ingresar usuario y contraseña");
}
    else if(user=="admin" && pass=="admin"){

    window.location="menu.html";
}
    else{

    window.location="menuuser.html";
}

}
