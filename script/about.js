document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const filterableItems = document.querySelectorAll('.filterable-item');

    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        filterableItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();

            if (itemText.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none'; 
            }
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value.replace(/\D/g, ''); // Elimina caracteres no numéricos
    const comment = document.getElementById('contactComment').value;

    let mensajeError = '';

    // Validar Nombre
    if (name.trim() === '') {
        mensajeError += 'El nombre no puede estar vacío.\n';
    }

    // Validar Email
    if (!email.includes('@') || !email.includes('.')) {
        mensajeError += 'El correo debe tener un @ y un .\n';
    }

    // Validar Teléfono (7 o 10 dígitos)
    if (phone.length !== 7 && phone.length !== 10) {
        mensajeError += 'El teléfono debe tener 7 o 10 dígitos.\n';
    }

    // Validar Comentario
    if (comment.trim() === '') {
        mensajeError += 'El comentario no puede estar vacío.\n';
    }

    // Mostrar alerta con los resultados
    if (mensajeError !== '') {
        alert('Hay errores en el formulario:\n' + mensajeError);
    } else {
        alert('¡Formulario enviado correctamente!');
        // Aquí podrías enviar el formulario si todo es correcto
        // this.submit();
    }
});