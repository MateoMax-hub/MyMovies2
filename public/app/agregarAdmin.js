
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
    displayUser()
    displayUserDate()
    // $('#exampleModalLabel').modal('hide');
}
