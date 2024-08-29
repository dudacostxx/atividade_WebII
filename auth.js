function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Usuário e senha estáticos
    const validUsername = 'admin';
    const validPassword = '12345';

    if (username === validUsername && password === validPassword) {
        alert('Login realizado com sucesso!');
        window.location.href = 'https://www.ifpb.edu.br';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos !';
    }
}
