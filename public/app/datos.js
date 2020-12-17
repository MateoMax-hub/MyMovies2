let dataJSON
let dataJSON2

fetch('../../src/assets/json/usersPrueba.json')
  .then(response => response.json())
  .then(data => {
    // Do something with your data
    dataJSON = JSON.stringify(data)
  });
fetch('../../src/assets/json/pelisPrueba.json')
  .then(response => response.json())
  .then(data => {
    // Do something with your data
    dataJSON2 = JSON.stringify(data)
  });

function addDatosTest() {
  localStorage.setItem('usersRegister',dataJSON)
  localStorage.setItem('userUI',dataJSON2)
  

  
  displayAllMoviesTable()
  filtrarPeliculas()
  displayAllUsersTable()
}



