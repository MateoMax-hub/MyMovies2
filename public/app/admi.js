const DatosDeCambio= document.getElementById('datosUI');

// Edicion de Datos
const FormularioDeCambio= document.getElementById('AgregarCambio')
const Titulotwo= document.getElementById('TituloCambio')
const Descripciontwo= document.getElementById('DescripcionCambio')
const Preciotwo= document.getElementById('PrecioCambio')
const Imagentwo= document.getElementById('ImagenCambio')
let editUserId = '';

function displayUsersDate(){
    const userUI= JSON.parse(localStorage.getItem('userUI')) || [];
    const rows= [];
    for (let i = 0; i < userUI.length; i++) {
        const user = userUI[i];
        const tr=
        `
        <tr>
            <td>${user.titulo}</td>
            <td>$${user.precio}</td>
            <td>${user.categoria}</td>
            <td>
                <button class="btn btn-dark" type="button" onclick="deleteUser('${user.id}')">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
                <button type="button" class="btn btn-warning" onclick="loadForm('${user.id}')" data-toggle="modal" data-target="#cambios">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-code" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"/>
                    </svg>
                </button>
            </td>
        </tr>
        `
        rows.push(tr)
    }
    DatosDeCambio.innerHTML= rows.join('')
}
displayUsersDate()

function deleteUser(userUIid) {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const filteredUsers = userUI.filter((user) => user.id !== userUIid);
    const userAgregarJson = JSON.stringify(filteredUsers);
    localStorage.setItem('userUI', userAgregarJson);
    displayUsersDate()
}

const loadForm = (userUIid) =>{
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const user = userUI.find((u)=> u.id === userUIid)

    Titulotwo.value = user.titulo;
    Descripciontwo.value = user.descripcion;
    Preciotwo.value = user.precio;
    Imagentwo.value = user.imagen;
    editUserId = userUIid;
}

const allconst = JSON.parse(localStorage.getItem('userUI')) || [];
displayAUser();

function displayAUser(){
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    console.log('lo que tira el cambio', userUI)
    displayUsersDate(userUI);
}

FormularioDeCambio.onsubmit= (e) => {
    e.preventDefault()
    const userUI= JSON.parse(localStorage.getItem('userUI')) || [];
    const titulo= Titulotwo.value;
    const descripcion= Descripciontwo.value;
    const precio= Preciotwo.value;
    const imagen= Imagentwo.value;
    const upCambiosOnline= userUI.map((u) => {
        if (u.id === editUserId) {
            const user = {
                ...u,
                titulo: titulo,
                descripcion: descripcion,
                precio: precio,
                imagen: imagen,
            }
            return user;
        } else {
            return u;
        }
    });
    const CambioJson = JSON.stringify(upCambiosOnline);
    localStorage.setItem('userUI', CambioJson);
    FormularioDeCambio.reset();
    displayAUser();
    $('#cambios').modal('hide');
}