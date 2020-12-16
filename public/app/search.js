// Buscador o search
const AllPelis = document.getElementById('AllPelis')
const search = document.getElementById('searchOne');
const SearchForm = document.getElementById('SearchForm');
const Mostrar = document.getElementById('MostrarPelis');
const MostrarPelisSect = document.getElementById('MostrarPelisSect')
// Buscador o Search

SearchForm.onsubmit = (e) => {
    MostrarPelisSect.classList = 'd-block';
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
        const tr = `
            <div class="prueba">
                <!-- Button trigger modal -->
                <div class="CardsIndividuales">
                    <a type="button" data-toggle="modal" data-target="#filter${agregar.id}">
                        <img src="${agregar.imagen}"
                        class="card-img-top" alt="...">
                    </a>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="filter${agregar.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                                <div style="display: flex; justify-content: space-between;">
                                    <!-- Button trigger modal -->  
                                    <a href="#" class="btn btn-success"><b>$${agregar.precio}</b> Arg</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        rowMostrar.push(tr)
    }
    console.log(movie);
    Mostrar.innerHTML = rowMostrar.join('')
}

function resetSearch() {
    AllPelis.classList = 'd-block'
    MostrarPelisSect.classList = 'd-none';
    SearchForm.reset()
}