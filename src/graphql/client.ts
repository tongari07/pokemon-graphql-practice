import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
})

export { apolloClient }
