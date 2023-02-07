const { ApolloServer } = require("apollo-server")
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')
const sechemaPath = './schema/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(sechemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})