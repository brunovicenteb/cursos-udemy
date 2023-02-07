const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
    #Pontos de entrada da sua API!

    scalar Date

    type Usuario {
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        blabla: String
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
        blabla(usuario) {
            return 'Olá'
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
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})