function calculadora() {
  const operacao = Number(prompt('Escolha a operação: \n 1: Soma \n 2: Subtração \n 3: Multiplicação \n 4: Divisão real \n 5: Divisão inteira \n 6: Potenciação '))
  console.log(operacao)
  if (!operacao || operacao > 6 || !Number.isInteger(operacao)) {
    alert('Erro - Digite uma operação valida')
    calculadora()
  } else {

    let n1 = Number(prompt('Primeiro valor'))
    let n2 = Number(prompt('Segundo valor'))
    let resultado;
    if (!n1 || !n2) {
      alert('Erro - Parametros Inválidos')
      calculadora()
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
      }
      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
      }
      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} multiplicado por ${n2} é ${resultado}`)
      }
      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} dividido por ${n2} é ${resultado}`)
      }
      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resultado da divisão ${n1} + ${n2} é ${resultado}`)
      }
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado ${n2} é ${resultado}`)
      }

      switch (operacao) {
        case 1:
          soma()
          break
        case 2:
          subtracao()
          break
        case 3:
          multiplicacao()
          break
        case 4:
          divisaoReal()
          break
        case 5:
          divisaoInteira()
          break
        case 6:
          potenciacao()
          break
      }
      novaOperacao()

      function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação? \n 1 - sim \n 2 - não')
        if (opcao == 1) {
          calculadora()
        } else if (opcao == 2) {
          alert('Até mais')
        } else {
          alert('Digite uma opção válida')
          novaOperacao()
        }
      }
    }
  }



}
calculadora()
