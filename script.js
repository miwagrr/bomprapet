// Funcionalidade de Agendamento via WhatsApp
const botaoAgendar = document.getElementById('botao-agendar');
const nomePetInput = document.getElementById('nome-pet');

botaoAgendar.addEventListener('click', function() {
    const nomeDoPet = nomePetInput.value.trim();
    
    if (nomeDoPet === '') {
        alert('Por favor, digite o nome do seu pet para agendar a consulta.');
        return;
    }
    
    const numeroTelefone = '553285076303';
    const mensagemCompleta = `Olá, gostaria de marcar uma consulta para meu pet, ${nomeDoPet}.`;
    const mensagemCodificada = encodeURIComponent(mensagemCompleta);
    const urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemCodificada}`;
    
    window.open(urlWhatsApp, '_blank');
});

// Animação de Surgimento ao Rolar
const localizacaoCard = document.getElementById('localizacao-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            localizacaoCard.classList.add('is-visible');
            localizacaoCard.classList.remove('hidden');
            observer.unobserve(localizacaoCard);
        }
    });
}, {
    threshold: 0.5
});

observer.observe(localizacaoCard);

// Funcionalidade do Formulário de Contato via WhatsApp
const botaoEnviar = document.getElementById('botao-enviar-contato');

botaoEnviar.addEventListener('click', function() {
    const nome = document.getElementById('nome-contato').value.trim();
    const email = document.getElementById('email-contato').value.trim();
    const mensagem = document.getElementById('mensagem-contato').value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    const numeroTelefone = '553285076303'; // Use o número de telefone da clínica
    
    // Constrói a mensagem completa com todas as informações
    const mensagemCompleta = `Nova mensagem do site:\n\nNome: ${nome}\nE-mail: ${email}\n\nMensagem: ${mensagem}`;
    
    // Codifica a mensagem para a URL
    const mensagemCodificada = encodeURIComponent(mensagemCompleta);
    
    // Monta o link para o WhatsApp Web
    const urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemCodificada}`;
    
    // Redireciona para o WhatsApp
    window.open(urlWhatsApp, '_blank');
});
