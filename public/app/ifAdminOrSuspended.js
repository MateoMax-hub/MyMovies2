const adminFalse = document.getElementById('adminFalse')
const adminTrue = document.getElementById('adminTrue')

const userInSesion= JSON.parse(localStorage.getItem('sesion'))

if (userInSesion.admin) {
    adminTrue.classList = ''
} else {
    adminFalse.classList = 'logotipo'
}
if (userInSesion.estado == 'suspendido') {
    $('#suspendedModal').modal('show')
}