function sidebarHeight () {

    $(document).ready(function () {

        var height = $(window).height() - 55.97;
        
        $('#sidebar').height(height);
    });
}
$(document).ready(function () {

    var height = $(window).height() - 55.97;
    
    $('#sidebar').height(height);
});
function showAgregarPeliculaSect(hideOrShow) {
    const agregarPeliculaSect = document.getElementById('agregarPeliculaSect')
    if (hideOrShow) {
        agregarPeliculaSect.classList = 'w-100 h-100 overflow-auto'
        showAgregarUsuariosSect(false)  
        showListaPeliculasSect(false)
        showListaUsersSect(false)
    } else {
        agregarPeliculaSect.classList = 'd-none'
    }
}


function showAgregarUsuariosSect(hideOrShow) {
    const agregarUsuariosSect = document.getElementById('agregarUsuariosSect')
    if (hideOrShow) {
        agregarUsuariosSect.classList = 'w-100 h-100 overflow-auto'
        showListaPeliculasSect(false)
        showAgregarPeliculaSect(false)
        showListaUsersSect(false)

    } else {
        agregarUsuariosSect.classList = 'd-none'
    }
}

function showListaPeliculasSect(hideOrShow) {
    const listaPeliculasSect = document.getElementById('listaPeliculasSect')
    if (hideOrShow) {
        listaPeliculasSect.classList = 'w-100 h-100 overflow-auto'
        showAgregarUsuariosSect(false)  
        showAgregarPeliculaSect(false)
        showListaUsersSect(false)

    } else {
        listaPeliculasSect.classList = 'd-none'
    }
}


function showListaUsersSect(hideOrShow) {
    const listaUsersSect = document.getElementById('listaUsersSect')
    if (hideOrShow) {
        listaUsersSect.classList = 'w-100 h-100 overflow-auto'
        showAgregarUsuariosSect(false)  
        showListaPeliculasSect(false)
        showAgregarPeliculaSect(false)
    } else {
        listaUsersSect.classList = 'd-none'
    }
}
