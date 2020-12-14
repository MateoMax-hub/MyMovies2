const loginForm = document.getElementById('loginForm');
const userLogin = document.getElementById('userLoginInput');
const passwordLogin = document.getElementById('passwordLoginInput');

const usersRegister= JSON.parse(localStorage.getItem('usersRegister')) || [];
const userAdminDefault = {
    usuario: "pelisAdmin",
    email: "hi@hi",
    password: "123admin",
    id: "_111111111",
    admin: true,
    enCarrito: [],
    enAlquiler: [],
    estado: 'habilitada'
}
usersRegister.push(userAdminDefault)

const local1 = localStorage.key(0)
const local2 =localStorage.key(1)
const local3 =localStorage.key(2)
const arrayLocal = [{key: local1},{key: local2},{key: local3}]

const userSesionFind = arrayLocal.find ((k) => k.key == 'sesion')
if (userSesionFind == undefined) {
    const falseSession = JSON.stringify('falseSession')
    localStorage.setItem('sesion', falseSession)
}
const userRegisterFind = arrayLocal.find ((k) => k.key == 'usersRegister')
if (userRegisterFind == undefined) {
    console.log('hi');
    const userAdminDefaulJSON = JSON.stringify(usersRegister)
    localStorage.setItem('usersRegister',userAdminDefaulJSON)
} else {
}


if (JSON.parse(localStorage.getItem('sesion')) == 'falseSession') {
} else {
    window.location.href= ('./index.html')
}

loginForm.onsubmit = (e) =>{
    e.preventDefault();
    if (!userLogin.value) 
    return alert('Ingrese usuario!')

    const usersRegister= JSON.parse(localStorage.getItem('usersRegister')) || [];
    const usuarioLG= userLogin.value;
    const passwordLG= passwordLogin.value;
    
    console.log('funcion', usersRegister)

    const ingresoObligatorio= usersRegister.find((usersRegister) => usersRegister.usuario === usuarioLG && usersRegister.password === passwordLG);
    
    if (ingresoObligatorio) {
        window.location.href= ('../index.html')
        const sessionJSON = JSON.stringify(ingresoObligatorio)
        localStorage.setItem('sesion',sessionJSON)
    } else {
        alert('No pa no ingresaste intentalo otro dia')
    }
}
