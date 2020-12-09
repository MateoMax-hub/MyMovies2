//Categorias
const subirCard = document.getElementById("subirCard");
const TerrorUI = document.getElementById('Terror');
const DramaUI = document.getElementById('Drama');
const comediaUI = document.getElementById('Comedia');

// Cambios de Agregar Pelicula
const FormCambioPeli = document.getElementById('CambiarPeli');
const TituloTwo = document.getElementById('TituloPeliTwo');
const DescripcionTwo = document.getElementById('DescripcionPeliTwo');
let editUserId = '';


// Agregar en Dom osea Html las nuevas Cards

function displayUser(u) {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const rowAgregados = [];
    const rowComedia = [];
    const rowDramaUI =[];
    const rowTerrorUI =[];


    const nuevosAgregados = userUI.filter((agregar) => agregar.categoria === 'Nuevos Agregados')
    for (let i = 0; i < nuevosAgregados.length; i++) {
        const agregar = nuevosAgregados[i];
        const tr =
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
                        <div class="fondoDeCard modal-content">
                            <div class="ofCard">
                                <div class="CardsModal card-body">
                                    <div>
                                        <h5 class="card-title">${agregar.titulo}</h5>
                                        <img src="${agregar.imagen}"class="cardImg" alt="...">
                                    </div>
                                    <div class="CardsM">
                                        <p class="card-text"><b>Descripcion: </b>${agregar.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="CardsModal modal-body">
                                <div>
                                    <a href="#" class="btn btn-outline-success"><b>$${agregar.precio} Arg</b></a>
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

        rowAgregados.push(tr);
    }

    const comedia = userUI.filter((agregar) => agregar.categoria === 'Comedia')
    for (let i = 0; i < comedia.length; i++) {
        const agregar = comedia[i];
        const tr =
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
                        <div class="fondoDeCard modal-content">
                            <div class="ofCard">
                                <div class="CardsModal card-body">
                                    <div>
                                        <h5 class="card-title">${agregar.titulo}</h5>
                                        <img src="${agregar.imagen}"class="cardImg" alt="...">
                                    </div>
                                    <div class="CardsM">
                                        <p class="card-text"><b>Descripcion: </b>${agregar.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="CardsModal modal-body">
                                <div>
                                    <a href="#" class="btn btn-outline-success"><b>$${agregar.precio} Arg</b></a>
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

        rowComedia.push(tr);
    }

    const drama = userUI.filter((agregar) => agregar.categoria === 'Drama')
    for (let i = 0; i < drama.length; i++) {
        const agregar = drama[i];
        const tr =
            `<div class="prueba">
                    <!-- Button trigger modal -->
                    <div class="CardsIndividuales">
                        <a type="button" data-toggle="modal" data-target="#${agregar.id}">
                            <img src="${agregar.imagen}" class="card-img-top" alt="...">
                        </a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="${agregar.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class=" modal-dialog">
                        <div class="fondoDeCard modal-content">
                            <div class="ofCard">
                                <div class="CardsModal card-body">
                                    <div>
                                        <h5 class="card-title">${agregar.titulo}</h5>
                                        <img src="${agregar.imagen}"class="cardImg" alt="...">
                                    </div>
                                    <div class="CardsM">
                                        <p class="card-text"><b>Descripcion: </b>${agregar.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="CardsModal modal-body">
                                <div>
                                    <a href="#" class="btn btn-outline-success"><b>$${agregar.precio} Arg</b></a>
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
                            <div class="fondoDeCard">
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

        rowDramaUI.push(tr);
    }

    const terror = userUI.filter((agregar) => agregar.categoria === 'Terror')
    for (let i = 0; i < terror.length; i++) {
        const agregar = terror[i];
        const tr =
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
                        <div class="fondoDeCard modal-content">
                            <div class="ofCard">
                                <div class="CardsModal card-body">
                                    <div>
                                        <h5 class="card-title">${agregar.titulo}</h5>
                                        <img src="${agregar.imagen}"class="cardImg" alt="...">
                                    </div>
                                    <div class="CardsM">
                                        <p class="card-text"><b>Descripcion: </b>${agregar.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="CardsModal modal-body">
                                <div>
                                    <a href="#" class="btn btn-outline-success"><b>$${agregar.precio} Arg</b></a>
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

        rowTerrorUI.push(tr);
    }
    subirCard.innerHTML = rowAgregados.join('');
    comediaUI.innerHTML = rowComedia.join('');
    DramaUI.innerHTML = rowDramaUI.join('');
    TerrorUI.innerHTML = rowTerrorUI.join('');
}
displayUser()


