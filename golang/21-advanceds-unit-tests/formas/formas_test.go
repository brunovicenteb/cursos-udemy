package formas

import (
	"math"
	"testing"
)

func TestArea(t *testing.T) {
	t.Run("Retângulo", func(t *testing.T) {
		rect := Retangulo{10, 12}
		areaEsperada := float64(120)
		areaRecebida := rect.Area()

		if areaEsperada != areaRecebida {
			t.Fatalf("A área recerbida %f é diferente da esperada %f",
				areaRecebida, areaEsperada)
		}
	})

	t.Run("Círculo", func(t *testing.T) {
		circ := Circulo{10}
		areaEsperada := float64(math.Pi * 100)
		areaRecebida := circ.Area()

		if areaEsperada != areaRecebida {
			t.Fatalf("A área recerbida %f é diferente da esperada %f",
				areaRecebida, areaEsperada)
		}
	})
}
