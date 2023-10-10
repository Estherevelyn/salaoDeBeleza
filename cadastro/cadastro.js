AOS.init();

        // Adicione um evento de envio ao formulário
        document.getElementById('signup-form').addEventListener('submit', function (e) {
            e.preventDefault(); // Evita o envio padrão do formulário

            // Coleta os dados do formulário
            const nome = document.getElementById('nome').value;
            const sobrenome = document.getElementById('sobrenome').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Verifica se as senhas coincidem
            if (password !== confirmPassword) {
                alert('As senhas não coincidem.');
                return;
            }

            // Cria um objeto com os dados do usuário
            const userData = {
                nome,
                sobrenome,
                email,
                password
            };

            // Converte o objeto em JSON e o salva no Local Storage
            localStorage.setItem('userData', JSON.stringify(userData));

            // Limpa o formulário
            this.reset();

            alert('Cadastro realizado com sucesso!');

            // Após salvar os dados do usuário no Local Storage
    localStorage.setItem('userData', JSON.stringify(userData));
    
    window.location.href = 'https://ericnathaan.github.io/PROJETO/Login/login.html';
        });