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
