const titleEditInput = document.getElementById('titleEditInput')
const priceEditInput = document.getElementById('priceEditInput')
const imageEditInput = document.getElementById('imageEditInput')
const categorieEditInput = document.getElementById('categorieEditInput')
const descriptionEditInput = document.getElementById('descriptionEditInput')
const editMovieForm = document.getElementById('editMovieForm')
let idEditing = ''


function editMovie(id) {
    $(`#modalOf${id}`).modal('hide')
    $('#editModal').modal('show')
    
    idEditing = id
    // filter pelicula editing 
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const editingMovie = userUI.filter((m) => m.id == id)
    // datos de la pelicula editando
    const title = editingMovie[0].titulo
    const price = editingMovie[0].precio
    const img = editingMovie[0].imagen
    const categorie = editingMovie[0].categoria
    const description = editingMovie[0].descripcion

    titleEditInput.value = title
    priceEditInput.value = price
    imageEditInput.value = img
    categorieEditInput.value = categorie 
    descriptionEditInput.value = description

}   

editMovieForm.onsubmit = (e) => {
    e.preventDefault()
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];

    titulo = titleEditInput.value
    precio = priceEditInput.value
    imagen = imageEditInput.value
    categoria = categorieEditInput.value
    descripcion = descriptionEditInput.value
    const editingMovie = userUI.map((m) => {
        if (m.id == idEditing) {
            const movie = {
                ...m,
                titulo,
                precio,
                imagen,
                categoria,
                descripcion
            }
            return movie
        } else {
            return {...m}
        }
    })
    
    const editingMovieJSON = JSON.stringify(editingMovie)
    localStorage.setItem('userUI',editingMovieJSON)
    displayAllMoviesTable()
    $('#editModal').modal('hide')
}

function redoEdit(t) {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const editingMovie = userUI.filter((m) => m.id == idEditing)

    const title = editingMovie[0].titulo
    const price = editingMovie[0].precio
    const img = editingMovie[0].imagen
    const categorie = editingMovie[0].categoria
    const description = editingMovie[0].descripcion

    
    
    
    
    if (t == 'title') {
        titleEditInput.value = title
    }if (t == 'price') {
        priceEditInput.value = price
    }if (t == 'img') {
        imageEditInput.value = img
    }if (t == 'categorie') {
        categorieEditInput.value = categorie 
    }if (t == 'description') {
        descriptionEditInput.value = description
    } 
}