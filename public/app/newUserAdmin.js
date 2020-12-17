const userIdInput = document.getElementById('userIdInput')
const userNameinput = document.getElementById('userNameInput')
const userEmailInput = document.getElementById('userEmailInput')
const userPasswordInput = document.getElementById('userPasswordInput')
const userAdminInput = document.getElementById('userAdminInput')
const newUserForm = document.getElementById('newUserForm')


function randomId() {
    const usersRegister= JSON.parse(localStorage.getItem('usersRegister')) || [];
    let id = generateId()
    while ((validacionId = usersRegister.find((u) => u.id == id)) !== undefined) {
        id = generateId()
    }
    
    userIdInput.value = id
}

newUserForm.onsubmit= (e) =>{
    e.preventDefault();
    const usersRegister= JSON.parse(localStorage.getItem('usersRegister')) || [];
    const usuario= userNameinput.value;
    const email= userEmailInput.value;
    const password= userPasswordInput.value;
    const id = userIdInput.value
    let admin
    if (userAdminInput.checked) {
        admin = true
    } else {
        admin = false
    }

    const validacion = usersRegister.find((u) => u.email.toLowerCase() == email.toLowerCase())
    const validacion2 = usersRegister.find((u) => u.id == id)
    if (validacion !== undefined && validacion2 !== undefined) {
        alert('email e id en uso')
        return
    }
    if (validacion !== undefined){
        alert('email en uso')
        return
    }
    if (validacion2 !== undefined){
        alert('id en uso')
        return
    }

    usersRegister.push({
        usuario: usuario,
        email: email,
        password: password,
        id: id,
        admin: admin,
        enCarrito: [],
        enAlquiler: [],
        estado: 'habilitada'
    })

    const usersJsonS= JSON.stringify(usersRegister);
    localStorage.setItem('usersRegister', usersJsonS);
    console.log(usersRegister)
    newUserForm.reset();
    displayAllUsersTable()
}