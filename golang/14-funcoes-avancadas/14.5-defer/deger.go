package main

import "fmt"

func funcao1() {
	fmt.Println("Executando a função 1")
}

func funcao2() {
	fmt.Println("Executando a função 2")
}

func alunoEstaAprovado(n1, n2 float32) bool {
	aprovado := false
	defer fmt.Println("Média calculada. Resultado retornado:", aprovado)
	fmt.Println("Entrando na função para verificar se o aluno está aprovado")

	media := (n1 + n2) / 2

	if media >= 6 {
		aprovado = true
		return true
	}
	aprovado = false
	return false
}

func main() {
	fmt.Println(alunoEstaAprovado(7, 8))
}
