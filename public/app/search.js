// Buscador o search
const AllPelis= document.getElementById('AllPelis')
const search = document.getElementById('searchOne');
const SearchForm= document.getElementById('SearchForm');
const Mostrar= document.getElementById('MostrarPelis');

// Buscador o Search
const allconst = JSON.parse(localStorage.getItem('userUI')) || [];
displayAUser();

function displayAUser(){
    const users= JSON.parse(localStorage.getItem('userUI')) || [];
    console.log('lo que tira el cambio', users)
    displayUser(users);
}

SearchForm.onsubmit = (e) => {
    Mostrar.classList= 'd-block';
    e.preventDefault();
    AllPelis.classList = 'd-none'
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const term = search.value;
    const filteredUsers = userUI.filter(u => (
        u.titulo.toLowerCase().includes(term.toLowerCase())
        || u.categoria.toLowerCase().includes(term.toLowerCase())
    ))
    console.log('lo que sale', filteredUsers);
    displayFilterMovie(filteredUsers)
}

function displayFilterMovie(movie) {
    const rowMostrar = [];
    for (let i = 0; i < movie.length; i++) {
        const agregar = movie[i];
        const tr= 
        `<div class="prueba">
                    <!-- Button trigger modal -->
                    <div class="CardsIndividuales">
                        <a type="button" data-toggle="modal" data-target="#${agregar.id}">
                            <img src="${agregar.imagen}"
                            class="card-img-top" alt="...">
                        </a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="${agregar.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                </section> `
        
        rowMostrar.push(tr)
    }
    console.log(movie);
    Mostrar.innerHTML=rowMostrar.join('')
}