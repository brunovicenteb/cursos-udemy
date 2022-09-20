package main

import "fmt"

func fibonacci(posicao uint) uint {
	if posicao <= 1 {
		return posicao
	}
	return fibonacci(posicao-2) + fibonacci(posicao-1)
}

func main() {
	fmt.Println("Funções Recursivas")
	fib := fibonacci(150)
	fmt.Println(fib)
	// 1 1 2 3 5 8 13
}
