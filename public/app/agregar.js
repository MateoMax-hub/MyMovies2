const formularioAgregar= document.getElementById('AgregarPeli');
const Titulo= document.getElementById('TituloPeli');
const Descripcion= document.getElementById('DescripcionPeli');
const subirCard= document.getElementById('subirCard');
// const usersTable= document.getElementById('usersTable');

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

formularioAgregar.onsubmit= (e) =>{
    e.preventDefault();
    const userUI= JSON.parse(localStorage.getItem('userUI')) || [];
    const titulo= Titulo.value;
    const descripcion= Descripcion.value;

    userUI.push({
        titulo: titulo,
        descripcion: descripcion,
        id: generateId()
    })

    const userAgregarJson = JSON.stringify(userUI);
    localStorage.setItem('userUI', userAgregarJson);

    formularioAgregar.reset();
    displayUser()
    // $('#exampleModalLabel').modal('hide');
}

function displayUser() {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const row = [];
    console.log("funciona pelicula", userUI);
    for (let i = 0; i < userUI.length; i++) {
        const agregar = userUI[i];
        const tr =
        `<div style="margin: 0px 3%;">
                    <!-- Button trigger modal -->
                    <div class="CardsIndividuales">
                        <div class="card" style="margin: 0%;">
                            <button type="button" onclick="deleteUser('${agregar.id}')" class="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <a type="button" data-toggle="modal" data-target="#exampleModal1">
                            <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
                                class="card-img-top" alt="...">
                        </a>
                    </div>
    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class=" modal-dialog">
                            <div class="modal-content">
                                <div class="CardsModal card-body">
                                    <h5 class="card-title">${agregar.titulo}</h5>
                                    <br>
                                    <p class="card-text"><b>Descripcion:</b>${agregar.descripcion}</p>
                                </div>
                                <div class="CardsModal modal-body">
                                    <div style="display: flex; justify-content: space-between;">
                                        <a href="#" class="btn btn-success">Alquilar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        row.push(tr);
    }
    subirCard.innerHTML = row.join('');
}
displayUser()

// data-toggle="modal" data-target="#exampleModalOneDireccion"

function deleteUser(userUIid) {
    const userUI = JSON.parse(localStorage.getItem('userUI')) || [];
    const filteredUsers = userUI.filter((agregar) => agregar.id !== userUIid);
    const userAgregarJson = JSON.stringify(filteredUsers);
    localStorage.setItem('userUI', userAgregarJson);
    displayUser()
}

//  <div class="card" style="width: 14rem; margin: 2%;">
//             <button type="button" onclick="deleteUser('${agregar.id}')" class="close">
//                 <span aria-hidden="true">&times;</span>
//             </button> 
//             <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
//                 class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${agregar.titulo}</h5>
//                 <p class="card-text"><b>Descripcion:</b>${agregar.descripcion}</p>
//                 <div style="display: flex; justify-content: space-between;">
//                     <a href="#" class="btn btn-dark">Alquilar</a>
//                     <a href="#" class="btn btn-success">Ver</a>
//                 </div>
//             </div>
//         </div>