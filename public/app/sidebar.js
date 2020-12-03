
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
function showagregarPeliculaSect () {
    const agregarPeliculaSect = document.getElementById('agregarPeliculaSect')
    
    agregarPeliculaSect.classList = 'w-75 h-100'
}

