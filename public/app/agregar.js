// Agregar Pelicula
const formularioAgregar = document.getElementById('AgregarPeli');
const Titulo = document.getElementById('TituloPeli');
const Descripcion = document.getElementById('DescripcionPeli');
const Precio = document.getElementById('PrecioPeli');
const Imagen = document.getElementById('ImagenPeli');
const Categoria = document.getElementById('categoriaPeli');


//Categorias
const subirCard = document.getElementById('subirCard');
const TerrorUI = document.getElementById('Terror');
const DramaUI = document.getElementById('Drama');
const comediaUI = document.getElementById('Comedia');

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// Json de Primer ingreso de Datos para agregar pelicula

formularioAgregar.onsubmit = (e) => {
    e.preventDefault();
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const titulo = Titulo.value;
    const descripcion = Descripcion.value;
    const precio = Precio.value;
    const imagen = Imagen.value;
    const categoria = Categoria.value;

    userUI.push({
        titulo: titulo,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen,
        categoria: categoria,
        id: generateId()
    })

    const userAgregarJson = JSON.stringify(userUI);
    localStorage.setItem('userUI', userAgregarJson);

    formularioAgregar.reset();
    displayUser()
    displayUserDate()
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
            `<div class="prueba">
                    <!-- Button trigger modal -->
                    <div class="CardsIndividuales">
                        <a type="button" data-toggle="modal" data-target="#exampleModal${[i]}">
                            <img src="${agregar.imagen}"
                            class="card-img-top" alt="...">
                        </a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal${[i]}" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class=" modal-dialog">
                            <div class="modal-content">
                                <div class="CardsModal card-body">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h5 class="card-title">${agregar.titulo}</h5>
                                    <br>
                                    <img src="${agregar.imagen}"class="card-img-top" alt="...">
                                    <br>
                                    <br>
                                    <p class="card-text"><b>Descripcion: </b>${agregar.descripcion}</p>
                                    <p class="card-text"><b>Precio: </b>$${agregar.precio}</p>
                                </div>
                                <div class="CardsModal modal-body">
                                    <div style="display: flex; justify-content: space-between;">
                                        <!-- Button trigger modal -->  
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
    // if (userUI.filter((agregar) => agregar.categoria === 'Comedia')) {
    //     comediaUI.innerHTML = row.join('');
    // } if (userUI.filter((agregar) => agregar.categoria === 'Terror')) {
    //     TerrorUI.innerHTML = row.join('');
    // } if (userUI.filter((agregar) => agregar.categoria === 'Drama')) {
    //     DramaUI.innerHTML = row.join('');
    // } else {
    //     subirCard.innerHTML = row.join('');
    // }

    subirCard.innerHTML = row.join('');
}
displayUser()


// data-toggle="modal" data-target="#exampleModalOneDireccion"


// Eliminar Card

function deleteUser(userUIid) {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const filteredUsers = userUI.filter((agregar) => agregar.id !== userUIid);
    const userAgregarJson = JSON.stringify(filteredUsers);
    localStorage.setItem('userUI', userAgregarJson);
    displayUser()
}