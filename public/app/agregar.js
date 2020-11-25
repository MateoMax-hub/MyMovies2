// Agregar Pelicula
const formularioAgregar= document.getElementById('AgregarPeli');
const Titulo= document.getElementById('TituloPeli');
const Descripcion= document.getElementById('DescripcionPeli');
const subirCard= document.getElementById('subirCard');

// Cambios de Agregar Pelicula
const FormCambioPeli= document.getElementById('CambiarPeli');
const TituloTwo= document.getElementById('TituloPeliTwo');
const DescripcionTwo= document.getElementById('DescripcionPeliTwo');
let editUserId = '';

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// Json de Primer ingreso de Datos para agregar pelicula

formularioAgregar.onsubmit= (e) =>{
    e.preventDefault();
    const userUI= JSON.parse(localStorage.getItem('userUI')) || [];
    const titulo= Titulo.value;
    const descripcion= Descripcion.value;

    userUI.push({
        titulo: titulo,
        descripcion: descripcion,
        id: generateId()
    })

    const userAgregarJson = JSON.stringify(userUI);
    localStorage.setItem('userUI', userAgregarJson);

    formularioAgregar.reset();
    displayUser()
    // $('#exampleModalLabel').modal('hide');
}

// Agregar en Dom osea Html las nuevas Cards

function displayUser() {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const row = [];
    console.log("funciona pelicula", userUI);
    for (let i = 0; i < userUI.length; i++) {
        const agregar = userUI[i];
        const tr =
        `<div style="margin: 0px 3%;">
                    <!-- Button trigger modal -->
                    <div class="CardsIndividuales">
                        <div class="card" style="margin: 0%;">
                            <button type="button" onclick="deleteUser('${agregar.id}')" class="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <a type="button" data-toggle="modal" data-target="#exampleModal1">
                            <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
                                class="card-img-top" alt="...">
                        </a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class=" modal-dialog">
                            <div class="modal-content">
                                <div class="CardsModal card-body">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h5 class="card-title">${agregar.titulo}</h5>
                                    <br>
                                    <p class="card-text"><b>Descripcion:</b>${agregar.descripcion}</p>
                                </div>
                                <div class="CardsModal modal-body">
                                    <div style="display: flex; justify-content: space-between;">
                                        <!-- Button trigger modal -->
                    
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalUi">
                                         Cambiar 
                                        </button>    
                                        <a href="#" class="btn btn-success">Alquilar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Seccion de Cambios de Pelicula -->
                <section>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalUi" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Cambios</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="modal-body">
                                        <form id="CambiarPeli">
                                            <div class="input-group" style="display: flex; flex-direction: column;">
                                                <div style="display: flex;">
                                                    <input type="text" id="TituloPeliTwo" class="form-control w-100"
                                                        aria-label="Text input with checkbox" placeholder="Titulo">
                                                </div>
                                            </div>
                                            <br>
                                            <div class="input-group" style="display: flex; flex-direction: column;">
                                                <div style="display: flex;">
                                                    <input type="text" id="DescripcionPeliTwo" class="form-control w-100"
                                                        aria-label="Text input with checkbox"
                                                        placeholder="Descripcion de pelicula...">
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`

        row.push(tr);
    }
    subirCard.innerHTML = row.join('');
}
displayUser()

// data-toggle="modal" data-target="#exampleModalOneDireccion"


const loadForm = (userId) =>{
    const userUI= JSON.parse(localStorage.getItem('userUI')) || [];
    const user = userUI.find((userUI)=> userUI.id === userId)

    TituloTwo.value = user.titulo;
    DescripcionTwo.value = user.descripcion;
    editUserId = userId;
}

FormCambioPeli.onsubmit= (e) =>{
    e.preventDefault()
    const userUI= JSON.parse(localStorage.getItem('userUI')) || [];
    const titulo= TituloTwo.value;
    const descripcion= DescripcionTwo.value;
    const updatedUsers = userUI.map((u) => {
        if (u.id === editUserId) {
            const user = {
                ...u,
                titulo: titulo,
                descripcion: descripcion,
            }
            return user;
        } else {
            return u;
        }
    });
    const userAgregarJson = JSON.stringify(updatedUsers);
    localStorage.setItem('userUI', userAgregarJson);
    FormCambioPeli.reset();
    displayUser();
}

// Eliminar Card

function deleteUser(userUIid) {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const filteredUsers = userUI.filter((agregar) => agregar.id !== userUIid);
    const userAgregarJson = JSON.stringify(filteredUsers);
    localStorage.setItem('userUI', userAgregarJson);
    displayUser()
}