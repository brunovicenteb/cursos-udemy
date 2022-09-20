package main

import (
	"fmt"
)

func main() {
	var variavel1 = "Variável 1"
	fmt.Println(variavel1)

	var (
		variavel3 = "lalalala"
		variavel4 = "lalalala"
	)

	fmt.Println(variavel3, variavel4)

	variavel5, variavel6 := "Variável 5", "Variável 6"
	fmt.Println(variavel5, variavel6)

	variavel5, variavel6 = variavel6, variavel5
	fmt.Println(variavel5, variavel6)
}
