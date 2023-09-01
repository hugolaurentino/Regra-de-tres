const valor_total_produto = 129.00
const meu_dinheiro = 80.00
const valor_do_desconto = valor_total_produto - meu_dinheiro

console.log(`Caso você tivesse apenas ${meu_dinheiro},
 e desejasse comprar um produto de ${valor_total_produto}. 
 Qual o percentual de desconto?
 
 O desconto é ${((valor_do_desconto * 100) / valor_total_produto).toFixed(1)}`);