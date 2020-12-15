
function ponerDatos() {
    $('#modalCarrito').modal('hide')
    $('#buyModal').modal('show')
}
function endBuy() {
    const sesion = userSesion()
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const ids = []
    for (let i = 0; i < sesion.enAlquiler.length; i++) {
        const element = sesion.enAlquiler[i];
        const array = {
            ...element
        }
        ids.push(array)
        console.log(ids);
    }
    console.log(ids);
    for (let i = 0; i < sesion.enCarrito.length; i++) {
        const element = sesion.enCarrito[i];
        console.log(element);
        for (let i = 0; i < ids.length; i++) {
            const ee = ids[i];
            const findM = ids.find((e) => element.id == e.id)
            if (findM) {
                alert('ya posees una o mas peliculas en tu carrito, por favor verificarlo en tu lista de peliculas')
                return
            }
        }
        
        element.fecha = Date.now()
        element.fechaExpiracion = Date.now() + (24 * 60 * 60 * 1000)
        sesion.enAlquiler.push(element)
    }
    sesion.enCarrito = []
    console.log('no')
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
