fetch('../../src/assets/json/usersPrueba.json')
    .then(response => response.json())
    .then(data => {
  	// Do something with your data
    console.log(data);
});