function analisePedidos(pedidos) {
    const relatorio = {
        qtdaValidos: 0,
        qtdaInvalidos: 0,
        totalPagamentos: 0,
        totalInadiplencia: 0,
        detalhamentoInadipencia: {},
        maiorPedidoIndividual: {}
    }
    const dadosVerificados = validacaoDados(pedidos)
    console.log(dadosVerificados)
    console.log(relatorio)
}

function validacaoDados(pedidos) {

    function validarEstruturaDados(pedidos) {

        if (!pedidos) {
            console.log("Erro: não foi passado nenhum array para o parametro!")
            return false;
        }
        else if (!Array.isArray(pedidos)) {
            console.log("Erro: parametro precisa ser um array de objetos!")
            return false;
        } else if (!pedidos.length > 0) {
            console.log("Erro: precisa ter pelo menos 1 objeto de pedido para fazer a análise")
            return false;
        }
        else {
            return true;
        }
    }
    if (!validarEstruturaDados(pedidos)) {
        return false;
    }

    let resultadoValidacao = {

        pedidosValidos: 0,
        pedidosInvalidos: 0

    }

    function validar() {
        for (let i = 0; i < pedidos.length; i++) {

            if (pedidos[i] === null && Object.getPrototypeOf(pedidos[i]) !== Object.prototype) {
                console.log("Erro: Os itens do array precisa ser objetos literais!")
                return false;
            }

            let nome = validarNome(pedidos[i].nome);
            let cpf = validarCPF(pedidos[i].cpf);
            let status = validarStatus(pedidos[i].status);

            console.log(dados)

            if (nome && cpf && status) {
                resultadoValidacao.pedidosValidos++;
            } else {
                resultadoValidacao.pedidosInvalidos++;
            }

        }
    }





    function validarNome(nome) {

        if (!nome) {
            console.log("Erro: digite o nome do cliente!")
            return false;
        }
        if (typeof nome === "string") {
            if (nome.trim() === "") {
                console.log("Erro: Digite um nome válido")
                return false;
            }
        } else {
            return false;
        }
 
    }

    function validarCPF(params) {

    }

    function validarValor(params) {

    }

    function validarStatus(params) {

    }
    validar();
    return resultadoValidacao;

}

console.log(analisePedidos([1]))