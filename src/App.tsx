import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./graphql/client"
import { SearchResultField } from "./components/SearchResultField"

function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <SearchResultField></SearchResultField>
        </ApolloProvider>
    )
}

export default App
