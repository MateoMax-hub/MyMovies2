const YouName= document.getElementById('suName');

function displayUsers(){
    const usersRegister= JSON.parse(localStorage.getItem('usersRegister')) || [];
    const rows= [];
    for (let i = 0; i < usersRegister.length; i++) {
        const user = usersRegister[i];
        const tr=
        `<h5 class="NombreUsers">${user.usuario}</h5>`
        rows.push(tr)
    }
    YouName.innerHTML= rows.join('')
}
displayUsers()