function endSession() {
    const falseSession = JSON.stringify('falseSession')
    localStorage.setItem('sesion', falseSession)
    window.location.href= ('./public/login.html')
}