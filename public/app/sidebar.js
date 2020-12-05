
function sidebarHeight () {

    $(document).ready(function () {

        var height = $(window).height() - 55.97;
        
        $('#sidebar').height(height);
    });
    console.log('working');
}
$(document).ready(function () {

    var height = $(window).height() - 55.97;
    
    $('#sidebar').height(height);
});
function showagregarPeliculaSect (hideOrShow) {
    const agregarPeliculaSect = document.getElementById('agregarPeliculaSect')
    if (hideOrShow) {
        agregarPeliculaSect.classList = 'w-75 h-100 overflow-auto'
        showAgregarUsuariosSect(false)  
    } else {
        agregarPeliculaSect.classList = 'd-none'
    }
}


function showAgregarUsuariosSect (hideOrShow) {
    const agregarUsuariosSect = document.getElementById('agregarUsuariosSect')
    if (hideOrShow) {
        agregarUsuariosSect.classList = 'w-75 h-100 overflow-auto'
        showagregarPeliculaSect(false)
    } else {
        agregarUsuariosSect.classList = 'd-none'
    }
}

