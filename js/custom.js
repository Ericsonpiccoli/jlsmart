(function() {
	'use strict';

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

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()
 // Habilita ou desabilita o campo de quantidade com base na seleção do produto
document.getElementById("produtos").addEventListener("change", function() {
    var quantidadeInput = document.getElementById("quantidadeProduto");
    if (this.value) {
        quantidadeInput.disabled = false; // habilita o campo de quantidade quando um produto é selecionado
    } else {
        quantidadeInput.disabled = true; // desabilita se não há seleção
    }
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

    // Monta a mensagem para o WhatsApp
    var whatsappMessage = `Nome: ${nome}\nSobrenome: ${sobrenome}\nTelefone: +55 54 99685-3250\nEmail: ${email}\nEndereço: ${endereco}\nProduto: ${produto}\nQuantidade: ${quantidade}\nMensagem: ${mensagem}`;

    // Envia a mensagem diretamente sem abrir uma nova aba
    var whatsappURL = `https://api.whatsapp.com/send/?phone=5554996853250&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;

    // Redireciona diretamente para o WhatsApp
    window.location.href = whatsappURL;
}
