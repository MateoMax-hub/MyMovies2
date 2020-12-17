const videoJJ = document.getElementById('videoPeliPush');

function displayUsers() {
    const idMovie = window.location.hash
    const idMovieSub = idMovie.substr(1)


    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const userMovies = userUI.filter((i) => i.id == idMovieSub)

    
    const linkUser = userMovies[0].video;

    const link = linkUser;
    const yt = 'https://www.youtube.com/embed/'
    const substr = link.substr(32,11)
    const embed = yt + substr;

    const rows = [];
    const tr =
        `<iframe width="560" height="315" 
    src="${embed}" fç
    rameborder="0" allow="accelerometer; autoplay; c
    lipboard-write; encrypted-media; gyroscope; p
    icture-in-picture" allowfullscreen></iframe>`
    rows.push(tr)
    videoJJ.innerHTML = rows.join('')
}
displayUsers()