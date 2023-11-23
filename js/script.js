$(document).ready(function () {
    $("#llenadoF").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefono: {
                required: true,
                minlength: 10,
                maxlength: 15
            },
            comentario: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: "Por favor, debes ingresar tu nombre completo",
                minlength: "El nombre debe ser mas largo"
            },
            email: {
                required: "Por favor, debes ingresar tu correo electrónico",
                email: "Ingresa un correo electrónico válido"
            },
            telefono: {
                required: "Por favor, ingresa tu número de teléfono",
                minlength: "El número de teléfono debe tener al menos 8 caracteres",
                maxlength: "El número de teléfono no debe tener más de 12 caracteres"
            },
            comentario: "Por favor, ingresa un comentario"
        },
        submitHandler: function (form) {
            alert("Formulario válido. Enviando datos...");
        }
    });
});