const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Bom dia!'
    },
    horaAtual() {
        return new Date()
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'anadawe@email.com',
            idade: 23,
            salario_real: 1234.56,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            id: 1,
            nome: 'Botina 950 Mel BQL',
            preco: 119.90,
            desconto: 19.90
        }
    },
    numerosMegaSena() {
        //return [4, 8, 13, 27, 33,  54]
        const crescente = (a, b) => a - b
        return Array(6)
            .fill(6)
            .map(() => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuarioPorId(_, args) {
        const sels = usuarios
            .filter(u => u.id == args.id)
        return sels ? sels[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, args) {
        const perfs = perfis
            .filter(u => u.id == args.id)
        return perfs ? perfs[0] : null
    }
}