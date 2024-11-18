    function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
        cartao.className = 'cartao'

        cartao.innerHTML = `
        <div class="cartao__conteudo">
                    <h3>Aleatório</h3>
                    <div class="cartao__conteudo__pergunta">
                    <p>Qual o motivo da morte de Hitler?</p>
                    </div>
                    <div class="cartao_-conteudo__resposta">
                    <p>Suicidio.</p>
                    </div>
                </div>
                `
                container.appendChild(cartao)
    }