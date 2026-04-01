document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Lista de usuários permitidos
    const users = [
        { login: "rafael", password: "123" },
        { login: "admin", password: "adminpassword" },
        { login: "tecnico", password: "ti2026" },
        { login: "visitante", password: "000" }
    ];

    const userIn = document.getElementById('username').value;
    const passIn = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Validação simples
    const authenticated = users.find(u => u.login === userIn && u.password === passIn);

    if (authenticated) {
        // Se correto, redireciona para a página do formulário
        alert("Acesso concedido! Redirecionando...");
        window.location.href = "formulario.html"; 
    } else {
        // Se incorreto, exibe mensagem de erro
        errorMessage.innerText = "Usuário ou senha incorretos.";
        errorMessage.style.display = "block";
    }
});