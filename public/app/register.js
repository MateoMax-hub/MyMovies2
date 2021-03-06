//declaracion de las variables

const formUser= document.getElementById('registerForm');
const usuarioLG= document.getElementById('userRegisterInput');
const emailLG= document.getElementById('emailRegisterInput');
const passwordLG= document.getElementById('passwordRegisterInput');

// generador de ID

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

formUser.onsubmit= (e) =>{
    e.preventDefault();
    if (!usuarioLG.value) {
        document.getElementById('required2').style.display = "block";
    }
    if (!emailRegisterInput.value) {
        document.getElementById('required3').style.display = "block";
    }
    if (!passwordLG.value) {
        document.getElementById('required4').style.display = "block";
    }
    if (!usuarioLG.value || !emailRegisterInput.value || !passwordLG.value) {
        return
    }

    const usersRegister= JSON.parse(localStorage.getItem('usersRegister')) || [];
    const usuario= usuarioLG.value;
    const email= emailLG.value;
    const password= passwordLG.value;


    const validacion = usersRegister.find((u) => u.email.toLowerCase() == email.toLowerCase())



    let id = generateId()
    while ((validacionId = usersRegister.find((u) => u.id == id)) !== undefined) {
        id = generateId()
    }


    if (validacion !== undefined){
        document.getElementById('required5').style.display = 'block'
        return
    }
    usersRegister.push({
        usuario: usuario,
        email: email,
        password: password,
        id: id,
        admin: false,
        enCarrito: [],
        enAlquiler: [],
        estado: 'habilitada'
    })


    const usersJsonS= JSON.stringify(usersRegister);
    localStorage.setItem('usersRegister', usersJsonS);
    formUser.reset();
    window.location = '../index.html'
}