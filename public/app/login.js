const loginForm = document.getElementById('loginForm');
const userLogin = document.getElementById('userLoginInput');
const passwordLogin = document.getElementById('passwordLoginInput');

const required = document.getElementById('required');
const requiredOne = document.getElementById('required1');

const usersRegister = JSON.parse(localStorage.getItem('usersRegister')) || [];
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
const local2 = localStorage.key(1)
const local3 = localStorage.key(2)
const arrayLocal = [{ key: local1 }, { key: local2 }, { key: local3 }]

const userSesionFind = arrayLocal.find((k) => k.key == 'sesion')
if (userSesionFind == undefined) {
    const falseSession = JSON.stringify('falseSession')
    localStorage.setItem('sesion', falseSession)
}
const userRegisterFind = arrayLocal.find((k) => k.key == 'usersRegister')
if (userRegisterFind == undefined) {
    console.log('hi');
    const userAdminDefaulJSON = JSON.stringify(usersRegister)
    localStorage.setItem('usersRegister', userAdminDefaulJSON)
} else {
}


if (JSON.parse(localStorage.getItem('sesion')) == 'falseSession') {
} else {
    window.location.href = ('./public/landPage.html')
}

loginForm.onsubmit = (e) => {
    e.preventDefault();
    if (!userLogin.value) {
        document.getElementById('required').style.display = "block";
    }

    if (!passwordLogin.value) {
        document.getElementById('required1').style.display = "block";
    }
    if (!userLogin.value || !passwordLogin.value) {
        return
    }
    const usersRegister = JSON.parse(localStorage.getItem('usersRegister')) || [];
    const usuarioLG = userLogin.value;
    const passwordLG = passwordLogin.value;

    const ingresoObligatorio = usersRegister.find((usersRegister) => usersRegister.usuario === usuarioLG && usersRegister.password === passwordLG);

    if (ingresoObligatorio) {
        window.location.href = ('./public/landPage.html')
        const sessionJSON = JSON.stringify(ingresoObligatorio)
        localStorage.setItem('sesion', sessionJSON)
    } else {
        document.getElementById('required1').style.display = "none";
        document.getElementById('required').style.display = "none";
        document.getElementById('required6').style.display = 'block'
    }
}
