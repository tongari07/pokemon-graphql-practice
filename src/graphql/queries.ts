import gql from "graphql-tag"

export const searchPikachu = gql`
    query searchPikachu {
        pokemon(name: "pikachu") {
            number
            name
            image
        }
    }
`

export const searchPokemon = gql`
    query searchPokemon($name: String) {
        pokemon(name: $name) {
            number
            name
            image
        }
    }
`
