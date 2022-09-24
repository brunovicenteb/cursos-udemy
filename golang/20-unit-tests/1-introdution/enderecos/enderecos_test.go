package enderecos_test

import (
	"introducao-testes/enderecos"
	"testing"
)

type cenarioDeTeste struct {
	enderecoInserido string
	retornoEsperado  string
}

func TestTipoDeEndereco(t *testing.T) {
	cenarioDeTeste := []cenarioDeTeste{
		{"Rua ABC", "Rua"},
		{"Avenida Paulista", "Avenida"},
		{"Rodovia dos Imigrantes", "Rodovia"},
		{"RUA DOS BOBOS", "Rua"},
		{"", "Tipo Inválido"},
		{"AVENIDA DOS REBOUÇAS", "Avenida"},
		{"Praça das Rosas", "Tipo Inválido"},
	}

	for _, endereco := range cenarioDeTeste {
		tipoDeEnderecoRecebido := enderecos.TipoDeEndereco(endereco.enderecoInserido)

		if endereco.retornoEsperado != tipoDeEnderecoRecebido {
			t.Errorf("O tipo recebido %s é diferente do esperado %s",
				tipoDeEnderecoRecebido, endereco.retornoEsperado)
		}
	}
}

func TestQualquer(t *testing.T) {
	if 1 > 2 {
		t.Errorf("Teste quebrou.")
	}
}
