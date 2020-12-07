// Agregar Pelicula
const formularioAgregar = document.getElementById('AgregarPeli');
const Titulo = document.getElementById('TituloPeli');
const Descripcion = document.getElementById('DescripcionPeli');
const Precio = document.getElementById('PrecioPeli');
const Imagen = document.getElementById('ImagenPeli');
const Categoria = document.getElementById('categoriaPeli');

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// Json de Primer ingreso de Datos para agregar pelicula

formularioAgregar.onsubmit = (e) => {
    e.preventDefault();
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const titulo = Titulo.value;
    const descripcion = Descripcion.value;
    const precio = Precio.value;
    const imagen = Imagen.value;
    const categoria = Categoria.value;

    userUI.push({
        titulo: titulo,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen,
        categoria: categoria,
        id: generateId()
    })

    const userAgregarJson = JSON.stringify(userUI);
    localStorage.setItem('userUI', userAgregarJson);

    formularioAgregar.reset();
    // $('#exampleModalLabel').modal('hide');
    displayAllMoviesTable()

}
