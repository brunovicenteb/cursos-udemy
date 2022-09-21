package main

import (
	"fmt"
)

func fibonacci(posicao int) int {
	if posicao <= 1 {
		return posicao
	}
	return fibonacci(posicao-2) + fibonacci(posicao-1)
}

func main() {
	numeros := make(chan int, 1500)
	resultados := make(chan int, 1500)

	for i := 0; i < 48; i++ {
		go worker(numeros, resultados)
	}

	for i := 0; i < 1500; i++ {
		numeros <- i
	}
	close(numeros)

	for i := 0; i < 1500; i++ {
		resultado := <-resultados
		fmt.Println(resultado)
	}
}

func worker(numeros <-chan int, resultados chan<- int) {
	for numero := range numeros {
		resultados <- fibonacci(numero)
	}
}
