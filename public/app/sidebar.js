const searchPeliculas = document.getElementById('searchPeliculas')
const searchUser = document.getElementById('searchUser')
const searchProduct = document.getElementById('searchProduct')

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
        showListaProductsSect(false)
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
        showListaProductsSect(false)

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
        showListaProductsSect(false)
        searchPeliculas.value = ''
        displayAllMoviesTable()
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
        showListaProductsSect(false)
        searchUser.value = ''
        displayAllUsersTable()
    } else {
        listaUsersSect.classList = 'd-none'
    }
}


function showListaProductsSect(hideOrShow) {
    const listaProductsSect = document.getElementById('listaProductsSect')
    if (hideOrShow) {
        listaProductsSect.classList = 'w-75 h-100 overflow-auto'
        showAgregarUsuariosSect(false)  
        showListaPeliculasSect(false)
        showAgregarPeliculaSect(false)
        showListaUsersSect(false)
        searchProduct.value = ''
        filtrarPeliculas()
    } else {
        listaProductsSect.classList = 'd-none'
    }
}