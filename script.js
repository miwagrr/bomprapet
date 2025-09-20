// Funcionalidade da Página Inicial (index.html)
if (document.getElementById('botao-agendar')) {
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
}


// Funcionalidade da Página de Contato (contato.html)
if (document.getElementById('botao-enviar-contato')) {
    const botaoEnviar = document.getElementById('botao-enviar-contato');
    const nomeInput = document.getElementById('nome-contato');
    const emailInput = document.getElementById('email-contato');
