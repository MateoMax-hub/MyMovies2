const listaTBody = document.getElementById('listaTBody')
const modalsSect = document.getElementById('modalsSect')
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }



function getMovies() {
    const sesion = userSesion()
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    // console.log(userUI[1].id)
    const tr = []
    const modals = []
    for (let i = 0; i < sesion.enAlquiler.length; i++) {
        const element = sesion.enAlquiler[i];
        const userMovies = userUI.filter((i) => i.id == element.id)
        const movie = userMovies[0]
        
        const td = `
            <tr class="tr1">
                <th scope="row">${new Date(element.fecha).toLocaleDateString('es-ES', options)}</th>
                <td>${movie.titulo}</td>
                <td>${movie.categoria}</td>
                <td>${new Date(element.fechaExpiracion).toLocaleDateString('es-ES', options)}</td>
                <td>
                    <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalOf${movie.id}">más info</button>
                </td>
            </tr>
        `
        
        const modal = `
            

            <div class="modal fade" id="modalOf${movie.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class=" modal-dialog">
                    <div class="fondoDeCard modal-content">
                        <div class="ofCard">
                            <div class="CardsModal card-body">
                                <div>
                                    <h5 class="card-title">${movie.titulo}</h5>
                                    <img src="${movie.imagen}"class="cardImg" alt="...">
                                </div>
                                <div class="CardsM">
                                    <p class="card-text"><b>Descripcion: </b>${movie.descripcion}</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a type="button" class="btn btn-outline-success" href='../video.html#${movie.id}'">Ver película</a>
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