## Objetivo
Analisar pedidos com base no nome do cliente, CPF, valor e status de pagamento.

## Validações técnicas
- os pedidos serão uma lista de objetos dentro de um array;
- Cliente deve ser String e não pode ser uma string vazia;
- Status de pagamento deve ser um valor booleano;
- O cpf deve vim como string contendo exatamente 11 caracteres numéricoss;
- valor deve ser number e diferente de NaN;
- O sistema deve remover apenas espaços no início e no fim do nome.




## Regras de negócios

- O sistema deve ignorar diferenças de maiúsculas/minúsculas nos nomes;
- Caso as exigencias da validação não sejam atendidas, entrata como pedido inválido;
- Valor deve ser maior que 0;
- A soma dos pagamentos será feita pelos pedidos de status de pagamento = true;
- A soma dos inadiplentes será feita pelos pedidos de status de pagamento = false;
- O valor dos clientes que tiverem devendo mais de um pedido serão somados e relacionado apenas uma vez ao cliente;
- Cada cliente recebera um id de acordo com seu cpf para evitar duplicatas com o mesmo nome;
- Mesmo que mais de um nome tente colocar um mesmo cpf, o primeiro nome que ficara vinculado a ele;
- em caso de empate no maior pedido, mantenha o primeiro.
- se não existir nenhum pedido válido, o relatório continue funcionando normalmente: totais em 0, lista de inadimplentes vazia e nenhum maior pedido identificado.
- Pedidos inválidos não entrarão nos calculos


## Requisitos funcionais

- Contabilizar quantidade de pedidos válidos;
- Contabilizar quantidade de pedidos inválidos;
- Contabilizar a soma total dos pagamentos;
- Contabilizar a soma total dos inadiplentes;
- Mostrar o nome, cpf e valor total que cada cliente deve;
- Mostrar o cliente que tem o maior pedido individual junto ao valor;
