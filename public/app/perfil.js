const YouName= document.getElementById('suName');

function displayUsers(){
    const usersRegister= JSON.parse(localStorage.getItem('sesion')) || [];
    const rows= [];
    const tr=
    `<h5 class="NombreUsers">${usersRegister.usuario}</h5>
    <p class="EmailUsers">${usersRegister.email}</p>`
    rows.push(tr)
    
    YouName.innerHTML= rows.join('')
}
displayUsers()