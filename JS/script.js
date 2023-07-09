
//Validacion de Formulario
var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('b1')

        var validarNombre = function (e) {
            if (formulario.nombre.value == 0) {
                alert("Ingresa tu nombre!")
                e.preventDefault()
            }
        }

        var validarMail = function (e) {
            if (formulario.mail.value == 0) {
                alert("Ingresa tu mail de contacto!")
                e.preventDefault()
            }
        }

        var validarComentario = function (e) {
            if (formulario.comentarios.value == 0) {
                alert("Ingresa tu comentario!")
                e.preventDefault()
            }
        }

        var validar = function (e) {
            validarNombre(e)
            validarMail (e)
            validarComentario(e)
        }
        formulario.addEventListener("submit", validar)


