function deleteProduct(m,u) {
    const users = JSON.parse(localStorage.getItem('usersRegister')) || [];
    
    const newUsers = []
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (u == element.id) {
            const user = element.enAlquiler.filter ((mo) => m !== mo.id)
            element.enAlquiler = user
        }
        newUsers.push(element)
    }
    const newUsersJSON = JSON.stringify(newUsers)
    localStorage.setItem('usersRegister',newUsersJSON)
    filtrarPeliculas()
}