const listaTBody = document.getElementById('listaTBody')
const modalsSect = document.getElementById('modalsSect')



function getMovies() {
    const sesion = userSesion()
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const tr = []
    const modals = []
    for (let i = 0; i < sesion.enAlquiler.length; i++) {
        const element = sesion.enAlquiler[i];
        const userMovies = userUI.filter((i) => i.id == element.id)
        const movie = userMovies[0]
        
        const td = `
            <tr class="tr1">
                <th scope="row">${movie.id}</th>
                <td>${movie.titulo}</td>
                <td>${movie.categoria}</td>
                <td>${movie.id}</td>
                <td>
                    <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalOf${movie.id}">más info</button>
                </td>
            </tr>
        `
        
        const modal = `
            <!-- Modal -->
            <div class="modal fade" id="modalOf${movie.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${movie.titulo}</h5>
                            <button type="button" class="btn-close btn" data-dismiss="modal" aria-label="Close">
                                <b><span aria-hidden="true">&times;</span></b>
                            </button>
                        </div>
                        <div class="modal-body">
                            
                            
                            <b>Categorias:</b>${movie.categoria}
                            <br>
                            <div>
                                <b>Descripción:</b>${movie.descripcion}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        tr.push(td)
        modals.push(modal)
    
        
    }
    listaTBody.innerHTML = tr.join('')
    modalsSect.innerHTML = modals.join('')
}
getMovies()