function addDatosTest() {
  fetch('../../src/assets/json/usersPrueba.json')
      .then(response => response.json())
      .then(data => {
      // Do something with your data
      const dataJSON = JSON.stringify(data)
      localStorage.setItem('usersRegister',dataJSON)
  });
  fetch('../../src/assets/json/pelisPrueba.json')
      .then(response => response.json())
      .then(data => {
      // Do something with your data
      const dataJSON = JSON.stringify(data)
      localStorage.setItem('userUI',dataJSON)
  });

}
addDatosTest()


