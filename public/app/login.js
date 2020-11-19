const loginForm = document.getElementById('loginForm');
const userLogin = document.getElementById('userLoginInput');
const passwordLogin = document.getElementById('passwordLoginInput');

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
        console.log('higigi')

        window.location.href= ('./index.html')
        const sessionJSON = JSON.stringify(ingresoObligatorio)
        localStorage.setItem('sesion',sessionJSON)
    } else {
        alert('No pa no ingresaste intentalo otro dia')
    }
}
