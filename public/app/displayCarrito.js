const carritoUl = document.getElementById('carritoUl')
const priceCart = document.getElementById('priceCart')
const Proyeccion = document.getElementById('Proyeccion')



function displayAllCarrito() {
    const user = userSesion()
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    
    const lis = []
    let price = parseFloat(0)

    for (let i = 0; i < user.enCarrito.length; i++) {
        const element = user.enCarrito[i];
        const findMovies = userUI.find ((i) => i.id == element.id)
        price = price + parseFloat(findMovies.precio)

        const li = `
            <div class="d-flex mb-2 align-items-center">
                <button class="btn btn-danger my-font2"  onclick="deleteInCarrito('${findMovies.id}')"><i class="fas fa-trash-alt"></i></button>
                <li class="ml-4">
                    ${findMovies.titulo}
                </li>
            </div>
        `

        lis.push(li)
        
    }
    const h6 = `
        <h6 class="align-self-start"><b>PRECIO TOTAL:</b>$${price}</h6>

    `
    priceCart.innerHTML = h6
    carritoUl.innerHTML = lis.join('')
}
displayAllCarrito()



function addToCart(id) {
    const user = userSesion()
    
    const noRepetidoCart = user.enCarrito.find((i) => i.id == id)
    if (noRepetidoCart) {
        alert('la pelicula ya se encuentra en el carrito')
        
    } else {
        const pid = {id:id}
        user.enCarrito.push(pid)
        const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
        const usersAfterPush = users.map((m) => {
            if (m.id == user.id) {
                const array = {
                    ...user
                }
                return user
            } else {
                return m
            }
        })
        const usersAfterPushJSON = JSON.stringify(usersAfterPush)
        const userJSON = JSON.stringify(user)
        localStorage.setItem('usersRegister',usersAfterPushJSON)
        localStorage.setItem('sesion',userJSON)
    }
    
    displayAllCarrito()
    
}  