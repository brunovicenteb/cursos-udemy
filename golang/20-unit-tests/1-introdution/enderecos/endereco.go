package enderecos

import "strings"

// TipoDeEndereco verifica se um endereço tem um tipo válido e retorna
func TipoDeEndereco(endereco string) string {

	tiposValidos := []string{"rua", "avenida", "estrada", "rodovia"}
	enderecoEmLetraMinuscula := strings.ToLower(endereco)
	primeiraPalavraDoEndereco := strings.Split(enderecoEmLetraMinuscula, " ")[0]

	for _, tipo := range tiposValidos {
		if tipo == primeiraPalavraDoEndereco {
			return strings.Title(primeiraPalavraDoEndereco)
		}
	}

	return "Tipo Inválido"
}
