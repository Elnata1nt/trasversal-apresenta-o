document.getElementById('coletaDadosForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado da maneira padrão

    const formData = new FormData(this);

    try {
        const response = await fetch('http://localhost:3000/dados', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }

        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);
    } catch (error) {
        console.error('Erro:', error);
    }

    // Limpa os campos do formulário após o envio
    this.reset();
});
