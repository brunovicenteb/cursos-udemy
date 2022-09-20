package main

import (
	"fmt"
	"modulo/1-pacotes/auxiliar"

	"github.com/badoux/checkmail"
)

func main() {
	fmt.Println("Escrevendo do arquivo main")
	auxiliar.Escrever()
	erro := checkmail.ValidateFormat("brunovicenteb@gmail.com")
	fmt.Println(erro)
}
