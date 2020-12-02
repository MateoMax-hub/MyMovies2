
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
function hola () {
    console.log('hi');
}