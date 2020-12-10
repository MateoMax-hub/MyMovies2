function deleteUser(id) {
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const deletingUser = users.filter((u) => u.id !== id)
    const deletingUserJSON = JSON.stringify(deletingUser)
    localStorage.setItem('usersRegister',deletingUserJSON)
    displayAllUsersTable()
}
function deleteMovie(id) {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const deletingMovie = userUI.filter((u) => u.id !== id)
    const deletingMovieJSON = JSON.stringify(deletingMovie)
    localStorage.setItem('userUI',deletingMovieJSON)
    displayAllMoviesTable()
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