//1.faça um programa que diga "ola mundo" na tela
alert('ola mundo')
//2.Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
let nome = prompt('digite um numero')
alert(`o numero informado foi ${nome}`)
//3. Faça um Programa que peça dois números e imprima a soma.
let num1 = parseInt(prompt('digite um numero'))
let num2 = parseInt(prompt('digite um numero'))
alert(`a soma dos numeros é ${num1 + num2}`)
//4.Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let nota1 = parseInt(prompt('digite a nota do primeiro bimestre'))
let nota2 = parseInt(prompt('digite a nota do segundo bimestre'))
let nota3 = parseInt(prompt('digite a nota do terceiro bimestre'))
let nota4 = parseInt(prompt('digite a nota do quarto bimestre'))
let media = (nota1 + nota2 + nota3 + nota4) / 4
alert(`a sua média é ${media}`)
//5.Faça um Programa que converta metros para centímetros.
let metros = parseInt(prompt('digite o valor em metros'))
let cent = metros * 100
alert(`essa quantidade em centímetros é ${cent}`)
//6.Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
let raio = parseInt(prompt('qual o raio do seu círculo?'))
let area = parseInt(3, 14) * raio * raio
alert(`o raio do seu círculo é aproximadamente ${area}`)
//7.Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
let quad = parseInt(prompt('quantos centímentros tem um lado do seu quadrado?'))
let dobroDaArea = quad * quad
alert(`a área do seu quadrado é ${dobroDaArea}`)
alert(`o dobro da área do seu quadrado é ${dobroDaArea * 2}`)
//8.Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let ganhoPHora = prompt('quanto você ganha por hora?')
let horasTraba = prompt('quantas horas você trabalha no mês?')
let ganhoMensal = ganhoPHora * horasTraba
alert(`seu ganho mensal é ${ganhoMensal}`)
//9.Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
let Fahrenheit = prompt('qual a temperatura que você quer converter de fahrenheit pra graus celsius?')
let cel = 5 * ((Fahrenheit - 32) / 9)
alert(`sua temperatura em graus celsius é ${cel}`)
//10.Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit
let celsius = prompt('qual a temnperatura que você quer converter de celsius pra fahrenheit?')
let temp = (celsius * 9 / 5) + 32
alert(`a sua temperatura em fahrenheit é ${temp}`)
/*11.Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
-o produto do dobro do primeiro com metade do segundo .
-a soma do triplo do primeiro com o terceiro.
-o terceiro elevado ao cubo.*/
let int = parseInt(prompt('digite um numero inteiro'))
let inte2 = parseInt(prompt('digite um numero inteiro'))
let real = parseFloat(prompt('digite um numero real'))
let prod = (int * 2) * (inte2 / 2)
let soma = (int * 3) + real
let cubo = real * real * real
alert(`o produto do dobro do primeiro com a metade do segundo é:${prod}\n a soma do triplo do primeiro com o terceiro é:${soma}\n o terceiro elevado ao cubo é: ${cubo}`)
//12.Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = parseFloat(prompt('qual sua altura'))
let pesoIdeal = 72.7 * altura - 58
alert(`seu peso ideal é ${pesoIdeal}`)
/*13.Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7*/
let alt = prompt('qual sua altura?')
let masc = (72.7 * alt) - 58
let fem = (62.1 * alt) - 44.7
alert(`seu peso ideal para homens é ${masc} \n seu peso ideal para mulheres é ${fem}`)

/*14.João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
*/
let peixe = parseInt(prompt('digite a quantidade de quilos de peixe?'))
let excesso = peixe - 50
let multa = excesso * 4
alert(`a quantidade de quilos excedente é ${excesso} e a multa é ${multa}R$`)





/*15.Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

-salário bruto.
-quanto pagou ao INSS.
-quando pagou para o sindicato.
-o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
Salário Bruto : R$
INSS (8%) : R$
Sindicato ( 5%) : R$ = 
Salário Liquido : R$ .: Salário Bruto - Descontos = Salário Líquido.)*/

let ganhoPhora = parseInt(prompt('quanto você ganha por hora?'))
let horasTrab = parseInt(prompt('quantas horas você trabalha no mês?'))
let salarioBruto = ganhoPhora * horasTrab
let inss = salarioBruto * 8 / 100
let sindicato = salarioBruto * 5 / 100
let salarioLiquido = salarioBruto - inss - sindicato
alert(`seu salario bruto é ${salarioBruto}\n o valor pago ao INSS foi ${inss}\n o valor pago ai sindicato foi ${sindicato}\n seu salario liquido é ${salarioLiquido}`)