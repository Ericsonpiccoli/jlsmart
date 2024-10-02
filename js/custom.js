(function() {
    'use strict';

    // Inicializa o slider de depoimentos
    var tinyslider = function() {
        var el = document.querySelectorAll('.testimonial-slider');

        if (el.length > 0) {
            var slider = tns({
                container: '.testimonial-slider',
                items: 1,
                axis: "horizontal",
                controlsContainer: "#testimonial-nav",
                swipeAngle: false,
                speed: 700,
                nav: true,
                controls: true,
                autoplay: true,
                autoplayHoverPause: true,
                autoplayTimeout: 3500,
                autoplayButtonOutput: false
            });
        }
    };
    tinyslider();

    // Controla o aumento e diminuição da quantidade
    var sitePlusMinus = function() {
        let quantity = document.getElementsByClassName('quantity-container');

        function createBindings(quantityContainer) {
            const quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
            const increase = quantityContainer.getElementsByClassName('increase')[0];
            const decrease = quantityContainer.getElementsByClassName('decrease')[0];
            increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
            decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
        }

        function init() {
            for (let i = 0; i < quantity.length; i++) {
                createBindings(quantity[i]);
            }
        }

        function increaseValue(event, quantityAmount) {
            let value = parseInt(quantityAmount.value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            quantityAmount.value = value;
        }

        function decreaseValue(event, quantityAmount) {
            let value = parseInt(quantityAmount.value, 10);
            value = isNaN(value) ? 0 : value;
            if (value > 0) value--;
            quantityAmount.value = value;
        }

        init();
    };
    sitePlusMinus();

})();

// Habilita ou desabilita o campo de quantidade com base na seleção do produto
document.getElementById("produtos").addEventListener("change", function() {
    var quantidadeInput = document.getElementById("quantidadeProduto");
    quantidadeInput.disabled = !this.value; // habilita/desabilita baseado na seleção
});

function enviarWhatsApp() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var endereco = document.getElementById("endereco").value;
    var produto = document.getElementById("produtos").value;
    var quantidade = document.getElementById("quantidadeProduto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Validação dos campos obrigatórios
    if (!nome || !sobrenome || !email || !endereco || !produto || !quantidade) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação básica de email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // Monta a mensagem para o WhatsApp
    var whatsappMessage = `Nome: ${nome}\nSobrenome: ${sobrenome}\nTelefone: +55 54 99685-3250\nEmail: ${email}\nEndereço: ${endereco}\nProduto: ${produto}\nQuantidade: ${quantidade}\nMensagem: ${mensagem}`;

    // Envia a mensagem diretamente sem abrir uma nova aba
    var whatsappURL = `https://api.whatsapp.com/send/?phone=5554996853250&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;

    // Redireciona diretamente para o WhatsApp
    window.location.href = whatsappURL;
}
