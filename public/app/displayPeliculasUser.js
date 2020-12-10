const listaTBody = document.getElementById('listaTBody')
const modalsSect = document.getElementById('modalsSect')


function displayMoviesTable (movies) {
    const tr = []
    const modals = []

    for (let i = 0; i < movies.length; i++) {
        const element = movies[i];
        const td = `
            <tr>
                <th scope="row">${element.id}</th>
                <td>${element.titulo}</td>
                <td>${element.precio}</td>
                <td>${element.categoria}</td>
                <td>
                    <button class="btn btn-danger"  onclick="deleteMovie('${element.id}')"><i class="fas fa-trash-alt"></i></button>
                    <button class="btn btn-outline-warning"  onclick="editMovie('${element.id}')"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-outline-dark" data-toggle="modal" data-target="#modalOf${element.id}">más info</button>
                </td>
            </tr>
        `
        const modal = `
            <!-- Modal -->
            <div class="modal fade" id="modalOf${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${element.titulo}</h5>
                            <button type="button" class="btn-close btn" data-dismiss="modal" aria-label="Close">
                                <b><span aria-hidden="true">&times;</span></b>
                            </button>
                        </div>
                        <div class="modal-body">
                            <b>Precio:</b>${element.precio}
                            <br>
                            <b>Categorias:</b>${element.categoria}
                            <br>
                            <div>
                                <b>Descripción:</b>${element.descripcion}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-warning" onclick="editMovie('${element.id}')"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        tr.push(td)
        modals.push(modal)
    }
    moviesTBody.innerHTML = tr.join('')
    modalsSect.innerHTML = modals.join('')
}

function displayUserMovies() {
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const usersesion = JSON.parse(localStorage.getItem('sesion')) || [];
    const filterUserSesion = users.find((u) => u.id == usersesion.id)
    

}
displayUserMovies()