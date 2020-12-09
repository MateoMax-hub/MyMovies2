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
