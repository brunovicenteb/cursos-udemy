package main

import "fmt"

func somar(n1 int8, n2 int8) int8 {
	return n1 + n2
}

func calculosMatematicos(n1, n2 int8) (int8, int8) {
	var soma = n1 + n2
	var subtracao = n1 - n2
	return soma, subtracao
}

func main() {
	var soma = somar(10, 20)
	fmt.Println(soma)

	var f = func(txt string) string {
		fmt.Println(txt)
		return txt
	}
	f("Texto da função 1")

	var resultadoSoma, resultadoMultiplicacao = calculosMatematicos(10, 15)
	fmt.Println(resultadoSoma, resultadoMultiplicacao)
}
