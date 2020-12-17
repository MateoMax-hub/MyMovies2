function endSession() {
    const falseSession = JSON.stringify('falseSession')
    localStorage.setItem('sesion', falseSession)
    window.location.href= ('../index.html')
}

const userSesion = function() {
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const usersesion = JSON.parse(localStorage.getItem('sesion')) || [];
    const filterUserSesion = users.find((u) => u.id == usersesion.id)
    return filterUserSesion
}
if (JSON.parse(localStorage.getItem('sesion')) == 'falseSession') {
    endSession()
}