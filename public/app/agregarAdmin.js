const formularioAgregar= document.getElementById('AgregarPeli');
const Titulo= document.getElementById('TituloPeli');
const Descripcion= document.getElementById('DescripcionPeli');


const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

formularioAgregar.onsubmit= (e) =>{
    e.preventDefault();
    const userUI= JSON.parse(localStorage.getItem('userUI')) || [];
    const titulo= Titulo.value;
    const descripcion= Descripcion.value;

    userUI.push({
        titulo: titulo,
        descripcion: descripcion,
        id: generateId()
    })

    const userAgregarJson = JSON.stringify(userUI);
    localStorage.setItem('userUI', userAgregarJson);

    formularioAgregar.reset();
    displayUser()
    // $('#exampleModalLabel').modal('hide');
}