eventListeners()

function eventListeners(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validar);
}

function validar(e) {
    e.preventDefault();

    const nombres = String(document.querySelector('#nombresInput').value); 
    const apellidos = String(document.querySelector('#apellidosInput').value); 
    const tipo = String(document.querySelector('#tipoInput').value); 
    const documento = String(document.querySelector('#documentoInput').value); 
    const telefono = String(document.querySelector('#telInput').value); 
    const correo = String(document.querySelector('#emailInput').value); 
    const asunto = String(document.querySelector('#asuntoInput').value); 
    const comentario = String(document.querySelector('#comentarioInput').value); 
    const fecha = String(document.querySelector('#fechaInput').value); 

    if (nombres === "") {
        swal.fire({
            icon: 'error',
            title: 'VALIDAR DATOS', 
        });    
    } else if (apellidos === "") {
        swal.fire({
            icon: 'error',
            title: 'VALIDAR DATOS', 
        }); 
    } else if (tipo === "") {
        swal.fire({
            icon: 'error',
            title: 'VALIDAR DATOS', 
        });     
    } else if (documento === "") {
        swal.fire({
            icon: 'error',
            title: 'VALIDAR DATOS', 
        });         
    } else if (telefono === "") {
        swal.fire({
            icon: 'error',
            title: 'VALIDAR DATOS', 
        });         
    } else if (correo === "") {
        swal.fire({
            icon: 'error',
            title: 'VALIDAR DATOS', 
        });   
    } else if (asunto === "") {
        swal.fire({
            icon: 'error',
            title: 'VALIDAR DATOS', 
        });       
    } else if (comentario === "") {
        swal.fire({
            icon: 'error',
            title: 'VALIDAR DATOS', 
        });       
    } else if (fecha === "") {
        swal.fire({
            icon: 'error',
            title: 'VALIDAR DATOS', 
        });      


} else {
    swal.fire({
        icon: 'success',
        title: 'PQR ENVIADO CON EXITO', 
    });       
}

}





