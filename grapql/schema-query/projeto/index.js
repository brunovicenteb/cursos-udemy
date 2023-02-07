const { ApolloServer, gql } = require("apollo-server")

const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1
}, {
    id: 2,
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2
}, {
    id: 3,
    nome: 'Daniel Smith',
    email: 'danismi@uemail.com',
    idade: 24,
    perfil_id: 2
}]

const perfils = [{
    id: 1,
    nome: 'Comum'
}, {
    id: 2,
    nome: 'Administrador'
}]

const typeDefs = gql`
    #Pontos de entrada da sua API!

    scalar Date

    type Perfil {
        id: Int!
        nome: String!
    } 

    type Usuario {
        id: Int!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        perfil: Perfil
    }
      
    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    type Query {
        ola: String!
        horaAtual: Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario!]!
        usuarioPorId(id: Int): Usuario
        perfis: [Perfil!]!
        perfil(id: Int): Perfil
    }
`

const resolvers = {
    Produto: {
        precoComDesconto(produto) {
            return produto.preco - produto.desconto
        }
    },
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
        perfil(usuario) {
            const perfs = perfils
                .filter(u => u.id === usuario.perfil_id)
            return perfs ? perfs[0] : null
        }
    },
    Query: {
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
            return perfils
        },
        perfil(_, args) {
            const perfs = perfils
                .filter(u => u.id == args.id)
            return perfs ? perfs[0] : null
        },
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})