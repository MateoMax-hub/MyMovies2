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
    const usersRegister= JSON.parse(localStorage.getItem('usersRegister')) || [];
    const usuario= usuarioLG.value;
    const email= emailLG.value;
    const password= passwordLG.value;

    usersRegister.push({
        usuario: usuario,
        email: email,
        password: password,
        id: generateId(),
    })

    const usersJsonS= JSON.stringify(usersRegister);
    localStorage.setItem('usersRegister', usersJsonS);
    console.log(usersRegister)
    formUser.reset();
}