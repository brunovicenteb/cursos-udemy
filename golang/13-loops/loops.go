package main

import "fmt"

func main() {
	// i := 0

	// for i < 10 {
	// 	fmt.Println("Incrementando i")
	// 	time.Sleep(time.Millisecond * 100)
	// 	i++
	// }

	// fmt.Println(i)

	// for j := 0; j < 10; j++ {
	// 	fmt.Println("Incrementando j")
	// 	time.Sleep(time.Millisecond * 100)
	// }

	nomes := [3]string{"João", "Davi", "Lucas"}

	for indice, nome := range nomes {
		fmt.Println(indice, nome)
	}

	for indice, letra := range "PALAVRA" {
		fmt.Println(indice, string(letra))
	}

	usuario := map[string]string{
		"nome":      "Leonardo",
		"sobrenome": "Silva",
	}

	for chave, valor := range usuario {
		fmt.Println(chave, valor)
	}
}
