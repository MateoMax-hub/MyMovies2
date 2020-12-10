$('#buyModal').modal('show')

function ponerDatos() {
    $('#modalCarrito').modal('hide')
    $('#buyModal').modal('show')
}
function endBuy() {
    const sesion = userSesion()
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];

    sesion.enCarrito = []

    const usersAfterBuy = users.map((i) => {
        if (i.id == sesion.id) {
            const array = {
                ...sesion,
                
            }
            return array
        } else {
            return i
        }
    })
    const usersAfterBuyJSON = JSON.stringify(usersAfterBuy)
    const sesionJSON = JSON.stringify(sesion)
    localStorage.setItem('sesion',sesionJSON)
    localStorage.setItem('usersRegister',usersAfterBuyJSON)
    displayAllCarrito()
    $('#modalCarrito').modal('show')
    $('#buyModal').modal('hide')

}