function saveMovieTT() {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const peliEnReproduccion = JSON.stringify(userUI)
    localStorage.setItem('peli', peliEnReproduccion)
}
// const sessionJSON = JSON.stringify(ingresoObligatorio)
//         localStorage.setItem('sesion', sessionJSON)