import { useState } from "react"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./graphql/client"
import { SearchForm } from "./components/SearchForm"
import { SearchResultField } from "./components/SearchResultField"

function App() {
    const [pokemonName, setpokemonName] = useState("")

    return (
        <>
            <SearchForm setpokemonName={setpokemonName}></SearchForm>
            <ApolloProvider client={apolloClient}>
                {pokemonName && <SearchResultField pokemonName={pokemonName}></SearchResultField>}
            </ApolloProvider>
        </>
    )
}

export default App
