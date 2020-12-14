const usersTBody = document.getElementById('usersTBody')
const usersModalsSect = document.getElementById('usersModalsSect')


function displayUsersTable (users) {
    const tr = []
    const modals = []

    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        const td = `
            <tr>
                <th scope="row">${element.usuario}</th>
                <td class="ElementsDeUsuarios" >${element.email}</td>
                <td>${element.estado}</td>
                <td>
                    <button class="btn btn-danger"  onclick="deleteUser('${element.id}')"><i class="fas fa-trash-alt"></i></button>
                    <button class="btn btn-outline-warning"  onclick="editUser('${element.id}')"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-outline-dark" data-toggle="modal" data-target="#userModalOf${element.id}">más info</button>
                </td>
            </tr>
        `
        const modal = `
            <!-- Modal -->
            <div class="modal fade" id="userModalOf${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${element.usuario}</h5>
                            <button type="button" class="btn-close btn" data-dismiss="modal" aria-label="Close">
                                <b><span aria-hidden="true">&times;</span></b>
                            </button>
                        </div>
                        <div class="modal-body">
                            <b>Id:</b>${element.id}
                            <br>
                            <b>Admin:</b>${element.admin}
                            <br>
                            <b>Email:</b>${element.email}
                            <br>
                            <b>Contraseña:</b>${element.password}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        tr.push(td)
        modals.push(modal)
    }
    usersTBody.innerHTML = tr.join('')
    usersModalsSect.innerHTML = modals.join('')
}

function displayAllUsersTable() {
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    displayUsersTable(users)
}
displayAllUsersTable()