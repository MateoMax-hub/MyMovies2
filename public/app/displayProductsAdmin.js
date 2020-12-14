const productsInfoModalsSect = document.getElementById('productsInfoModalsSect');
const productsTBody = document.getElementById('productsTBody');

function displayProducts(movies) {
    console.log(movies);
    const tr = []
    const modals = []
    for (let i = 0; i < movies.length; i++) {
        const element = movies[i];
        
        const th = `
            <tr class="tr1">
                <th scope="row">a</th>
                <td>${element.title}</td>
                <td>${element.userName}</td>
                <td>b</td>
                <td>
                    <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalOfProduct${element.idMovie}by${element.userId}">más info</button>
                </td>
            </tr>
        `
        const modal = `
            <!-- Modal -->
            <div class="modal fade" id="modalOfProduct${element.idMovie}by${element.userId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><b>Pelicula alquilada:</b> ${element.title}</h5>
                            <button type="button" class="btn-close btn" data-dismiss="modal" aria-label="Close">
                                <b><span aria-hidden="true">&times;</span></b>
                            </button>
                        </div>
                        <div class="modal-body">
                            <b>Fecha de la compra:</b>a
                            <br>
                            <b>Fecha de expiracion:</b>b
                            <br>
                            <b>Nombre de propietario:</b>${element.userName}
                            <br>
                            <b>Id de propietario:</b>${element.userId}
                            <br>
                            <b>Id de la película:</b>${element.idMovie}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        tr.push(th)
        modals.push(modal)
    }
    productsInfoModalsSect.innerHTML = modals.join('')
    productsTBody.innerHTML = tr.join('')
}

function filtrarPeliculas() {
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];

    const movies = []
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const userId = user.id
        const userName = user.usuario
        for (let i = 0; i < user.enAlquiler.length; i++) {
            const alquilada = user.enAlquiler[i];
            const movieTitle = userUI.filter((m) => m.id == alquilada.id)
            
            const movie = {
                userName: userName,
                idMovie: alquilada.id,
                userId: userId,
                title: movieTitle[0].titulo
            }
            movies.push(movie)
        }
    }

    displayProducts(movies)
}
filtrarPeliculas()