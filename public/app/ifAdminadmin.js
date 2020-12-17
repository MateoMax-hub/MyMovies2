const userInSesion= JSON.parse(localStorage.getItem('sesion'))
if (userInSesion.admin) {

} else {
    window.location = '../index.html'
    endSession()
}