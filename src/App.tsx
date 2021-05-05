import React from "react"

function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <div>pokemon-graphql-practice</div>
        </ApolloProvider>
    )
}

export default App
