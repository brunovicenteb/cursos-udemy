package main

import "fmt"

func main() {
	f := func(texto string) string {
		return fmt.Sprintf("Recebido -> %s", texto)
	}
	retorno := f("Olá Mundo!")
	fmt.Println(retorno)
}
