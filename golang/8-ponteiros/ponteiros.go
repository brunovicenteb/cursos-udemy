package main

import "fmt"

func main() {
	fmt.Println("Ponteiros")

	var varivael1 int = 10
	var variavel2 int = varivael1

	fmt.Println(varivael1, variavel2)

	variavel2++
	fmt.Println(varivael1, variavel2)

	// PONTEIRO É UMA REFERÊNCIA DE MEMÓRIA
	var variavel3 int
	var ponteiro *int

	fmt.Println(variavel3, ponteiro)

	variavel3 = 100
	ponteiro = &variavel3
	fmt.Println(variavel3, *ponteiro) // desreferenciação

	variavel3 = 150
	fmt.Println(variavel3, *ponteiro)
}
