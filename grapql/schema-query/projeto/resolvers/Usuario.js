const { perfis } = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const perfs = perfis
            .filter(u => u.id === usuario.perfil_id)
        return perfs ? perfs[0] : null
    }
}