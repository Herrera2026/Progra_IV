document.addEventListener("DOMContentLoaded", () => {
    frmAlumnos.addEventListener("submit", (e) => {
        e.preventDefault();
       guardarAlumno();
    });
    mostrarAlumno();
});
function mostrarAlumno(){
    let $tblAlumnos = document.querySelector("tb1Alumno > tbody");
    n = localStorage.length;
    filas = '';
    $tblAlumnos.innerHTML = "";
    console.log(n);
    for(i=0; i<n; i++){
        let key = localStorage.key(i);
        let data = JSON.parse(localStorage.getItem(key));
        filas += `<tr>
            <td>${data.codigo}</td>
            <td>${data.nombre}</td>
            <td>${data.direccion}</td>
            <td>${data.municipio}</td>
            <td>${data.departamento}</td>
            <td>${data.telefono}</td>
            <td>${data.fechaNacimiento}</td>
            <td>${data.sexo}</td>
            <td> 
            <button class="btn btn-warning">Editar</button> </td>
            <button class="btn btn-danger">Eliminar</button> </td>

        </tr>`;
       

        
    }
    
    $tblAlumnos.innerHTML = filas;
}
function editarAlumno(id){

function guardarAlumno() {
    let datos = {
        id: getId(),
        codigo: txtCodigoAlumno.value,
        nombre: txtnombreAlumno.value,
        direccion: txtDireccionAlumno.value,
        municipio: txtMunicipioAlumno.value,
        departamento: txtDepartamentoAlumno.value,
        telefono: txtTelefonoAlumno.value,
        fechaNacimiento: txtFechaNacimientoAlumno.value,
        sexo: txtSexoAlumno.value
    }, codigoDuplicado = buscarAlumno(datos.codigo);
    if(codigoDuplicado){
        alert("El codigo del alumno ya existe, "+ codigoDuplicado.nombre);
        return; //Termina la ejecucion de la funcion
    }
    localStorage.setItem( datos.id, JSON.stringify(datos));
    limpiarFormulario();
}

function getId(){
    return localStorage.length + 1;
}

function limpiarFormulario(){
    frmAlumnos.reset();
}

function buscarAlumno(codigo=''){
    let n = localStorage.length;
    for(let i = 0; i < n; i++){
        let datos = JSON.parse(localStorage.getItem(i));
        if(datos?.codigo && datos.codigo.trim().toUpperCase() == codigo.trim().toUpperCase()){
            return datos;
        }
    }
    return null;
}
