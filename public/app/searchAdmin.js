

searchPeliculas.oninput = () => {
    const where = "pelis"
    const term = searchPeliculas.value
    filter(term,where)
    
}
searchUser.oninput = () => {
    const where = "user"
    const term = searchUser.value
    filter(term,where)
}
searchProduct.oninput = () => {
    const where = "product"
    const term = searchProduct.value
    filter(term,where)
}

function filtrarPeliculas2(term) {
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];

    const movies = []
    console.log(movies);
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
    console.log(movies[1].userName);
    const productFiltradas = movies.filter((p) => (
        "adminPelis".includes(term.toLowerCase())
        || p.idMovie.toLowerCase().includes(term.toLowerCase())
        || p.userId.toLowerCase().includes(term.toLowerCase())
        || p.title.toLowerCase().includes(term.toLowerCase())
    ))
    displayProducts(productFiltradas)
}

function filter (term,where) {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];

    if (where == "pelis") {
        const pelisFiltradas = userUI.filter(p => (
            p.titulo.toLowerCase().includes(term.toLowerCase())
            || p.categoria.toLowerCase().includes(term.toLowerCase())
            || p.id.toLowerCase().includes(term.toLowerCase())
        ))
        displayMoviesTable(pelisFiltradas)
    }
    if (where == "user") {
        const usersFiltradas = users.filter(u => (
            u.usuario.toLowerCase().includes(term.toLowerCase())
            || u.email.toLowerCase().includes(term.toLowerCase())
            || u.id.toLowerCase().includes(term.toLowerCase())
        ))
        displayUsersTable(usersFiltradas)
    }
    if (where == "product") {
        filtrarPeliculas2(term)
    }
}
