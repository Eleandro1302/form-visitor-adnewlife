document.getElementById('como').addEventListener('change', function() {
    var amigoNomeContainer = document.getElementById('amigoNomeContainer');
    if (this.value === 'amigo') {
        amigoNomeContainer.style.display = 'block';
    } else {
        amigoNomeContainer.style.display = 'none';
    }
});

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var whats = document.getElementById('whats').value;
    var como = document.getElementById('como').value;
    var amigoNome = document.getElementById('amigoNome').value;
    var oracao = document.getElementById('oracao').value;
    var termos = document.getElementById('termos').checked;

    if (termos) {
        var message = `Nome: ${nome}\nWhatsApp: ${whats}\nComo soube: ${como}`;
        if (como === 'amigo') {
            message += `\nNome do amigo: ${amigoNome}`;
        }
        if (oracao) {
            message += `\nPedido de Oração: ${oracao}`;
        }

        // Enviar dados para o bot do Telegram
        var telegramBotToken = '7576819398:AAFs-48-eZz2cXYz3pUHp6egCvBmhLELVHM';
        var telegramChatId = '1115306987';
        var telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;

        fetch(telegramUrl)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Bem-vindo à família NewLife!');
                    document.querySelector('.success-message').style.display = 'block';
                    document.querySelector('.instagram-icon').style.display = 'block';
                    window.location.href = 'https://www.instagram.com/ad_newlifechurch_watford?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
                } else {
                    alert('Erro ao enviar dados.');
                }
            })
            .catch(error => {
                alert('Erro ao enviar dados.');
                console.error('Error:', error);
            });
    } else {
        alert('Você deve aceitar os termos.');
    }
});

function redirectToInstagram() {
    window.location.href = 'https://www.instagram.com/ad_newlifechurch_watford?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
}
