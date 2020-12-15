const editUsersModal = document.getElementById('editUsersModal')
const editUsersForm = document.getElementById('editUsersForm')
const nombreEditInput = document.getElementById('nombreEditInput')
const emailEditInput = document.getElementById('emailEditInput')
const contraseñaEditInput = document.getElementById('contraseñaEditInput')
const adminEditInput = document.getElementById('adminEditInput')
const suspendedEditInput = document.getElementById('suspendedEditInput')
let idUserEditing = ''

function editUser(id) {
    $('#editUsersModal').modal('show')
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    idUserEditing = id
    const editingUser = users.filter((u) => u.id == id)
    const nombre = editingUser[0].usuario
    const email = editingUser[0].email
    const contraseña = editingUser[0].password
    const admin = editingUser[0].admin
    const suspended = editingUser[0].estado

    if (suspended == 'suspendido') {
        suspendedEditInput.setAttribute ('checked','')
    } else {
        suspendedEditInput.removeAttribute('checked')
    }

    if (admin) {
        adminEditInput.setAttribute ('checked','')
    } else {
        adminEditInput.removeAttribute('checked')
    }
    nombreEditInput.value = nombre
    emailEditInput.value = email
    contraseñaEditInput.value = contraseña
}

editUsersForm.onsubmit = (e) => {
    e.preventDefault()
    let estado = ''
    let admin
    if (adminEditInput.checked) {
        admin = true
    } else {
        admin = false
    }
    if (suspendedEditInput.checked) {
        estado = 'suspendido'
    } else {
        estado = 'habilitada'
    }
    const usuario = nombreEditInput.value
    const email = emailEditInput.value
    const password = contraseñaEditInput.value
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const editUser = users.map((u) => {
        if (u.id == idUserEditing) {
            const user = {
                ...u,
                usuario,
                email,
                password,
                admin,
                estado,
            }
            return user
        } else {
            return {...u}
        }
    })
    const editUserJSON = JSON.stringify(editUser)
    localStorage.setItem('usersRegister',editUserJSON)
    displayAllUsersTable()
    $('#editUsersModal').modal('hide')

}
function redoUserEdit(i) { 
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const editingUser = users.filter((u) => u.id == idUserEditing)

    const nombre = editingUser[0].usuario
    const email = editingUser[0].email
    const contraseña = editingUser[0].password
    const admin = editingUser[0].admin

    

    if (i == "nombre") {
        nombreEditInput.value = nombre
    }if (i == "email") {
    emailEditInput.value = email
    }if (i == "contra") {
        contraseñaEditInput.value = contraseña
    }if (i == "admin") {
        if (admin) {
            adminEditInput.setAttribute ('checked','')
        } else {
            adminEditInput.removeAttribute('checked')
        }
    }
}
