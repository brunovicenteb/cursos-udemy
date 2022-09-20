package main

import (
	"errors"
	"fmt"
)

func main() {
	var numero int16 = 100
	fmt.Println(numero)

	var numero2 uint32 = 1000
	fmt.Println(numero2)

	// alias
	// INT32 = RUNE
	var numero3 rune = 1000
	fmt.Println(numero3)

	// alias
	// BYTE = UINT8
	var numero4 rune = 123
	fmt.Println(numero4)

	var numeroReal1 float32 = 123.45
	fmt.Println(numeroReal1)

	var numeroReal2 float32 = 123000.0045
	fmt.Println(numeroReal2)

	var numeroReal3 = 12560.00045
	fmt.Println(numeroReal3)

	var str string = "Texto"
	fmt.Println(str)

	var str2 = "Outro texto"
	fmt.Println(str2)

	char := '$'
	fmt.Println(char)

	var texto int
	fmt.Println(texto)

	var booleano1 bool = true
	fmt.Println(booleano1)

	var erro error = errors.New("Esse é um erro que eu criei")
	fmt.Println(erro)
}
