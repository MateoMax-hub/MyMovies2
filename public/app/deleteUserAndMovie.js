function deleteUser(id) {
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const deletingUser = users.filter((u) => u.id !== id)
    const deletingUserJSON = JSON.stringify(deletingUser)
    localStorage.setItem('usersRegister',deletingUserJSON)
    displayAllUsersTable()
    searchUser.value = ''

}
function deleteMovie(id) {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];

    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    
    const movies = []
    
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const userId = user.id
        const userName = user.usuario
        for (let i = 0; i < user.enAlquiler.length; i++) {
            const alquilada = user.enAlquiler[i];
            const movieTitle = userUI.filter((m) => m.id == alquilada.id)
            
            const movie = {
                expira: alquilada.fechaExpiracion,
                fecha: alquilada.fecha,
                userName: userName,
                idMovie: alquilada.id,
                userId: userId,
                title: movieTitle[0].titulo
            }
            movies.push(movie)
        }
    }
    const validacion = movies.find((u) => u.idMovie == id)
    if (validacion !== undefined) {
        console.log("hola");
        alert(`un usuario tiene comprada la pelicula que estas queriendo eliminar, eliminacela primero para poder eliminarla por completo de Mercado Pelis`)
        return
    }
    
    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        const validacion2 = user.enCarrito.find((a) => a.id == id)
        if (validacion2 !== undefined) {
            alert('un usuario tiene la pelicula en su carrito no puedes eliminar la pelicula')
            return
        }
        
    }

    const deletingMovie = userUI.filter((u) => u.id !== id)

    const deletingMovieJSON = JSON.stringify(deletingMovie)
    localStorage.setItem('userUI',deletingMovieJSON)
    displayAllMoviesTable()
    searchPeliculas.value = ''
}

function deleteInCarrito(id) {
    const sesion = userSesion()
    const userCart = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const deletingMovieCart = sesion.enCarrito.filter((i) => i.id !== id)
    sesion.enCarrito = deletingMovieCart
    
    const usersAfterDelete = userCart.map ((u) => {
        if (u.id == sesion.id) {
            const array = {
                ...sesion
            }
            return array
        } else {
            return u
        }
    })
    const usersAfterDeleteJSON = JSON.stringify(usersAfterDelete)
    localStorage.setItem('usersRegister',usersAfterDeleteJSON)
    displayAllCarrito()
}