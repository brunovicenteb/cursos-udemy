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
    }

    type Query {
        ola: String!
        horaAtual: Date!
        usuarioLogado: Usuario
    }
`

const resolvers = {
    Query: {
        ola() {
            return 'Bom dia!'
        },
        horaAtual() {
            return new Date()
        },
        usuarioLogado(){
            return {
                id: 1,
                nome: 'Ana da Web',
                email: 'anadawe@email.com',
                idade: 23,
                salario: 1234.56,
                vip: true
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})