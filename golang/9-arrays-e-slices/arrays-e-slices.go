package main

import (
	"fmt"
	"reflect"
)

func main() {
	fmt.Println("Arrays e Slices")

	var array1 [5]string
	array1[0] = "Posição 1"
	fmt.Println(array1)

	array2 := [5]string{"Posição 1", "Posição 2", "Posição 3", "Posição 4", "Posição 5"}
	fmt.Println(array2)

	array3 := [...]int{1, 2, 3, 4, 5, 6, 7}
	fmt.Println(array3)

	slice := []int{1, 23, 5, 4, 59, 4, 7, 2, 6}
	fmt.Println(slice)

	fmt.Println(reflect.TypeOf(array3))
	fmt.Println(reflect.TypeOf(slice))

	slice = append(slice, 25)
	fmt.Println(slice)

	slice2 := array2[1:3]
	array2[1] = "Posição 2.1"
	fmt.Println(array2)
	fmt.Println(slice2)

	slice3 := make([]float32, 10, 11)
	fmt.Println(slice3)

	slice3 = append(slice3, 5)
	slice3 = append(slice3, 6)
	fmt.Println(slice3)
	fmt.Println(len(slice3)) // length
	fmt.Println(cap(slice3)) // capacidade

	slice4 := make([]float32, 5)
	fmt.Println(slice3)
	slice4 = append(slice4, 10)
	fmt.Println(len(slice4)) // length
	fmt.Println(cap(slice4)) // capacidade
}
