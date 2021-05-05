import { useQuery } from "@apollo/client"
import { Query } from "../@types/types"
import { searchPokemon } from "../graphql/queries"

type PropType = {
    pokemonName: string
}

const SearchResultField: React.FC<PropType> = ({ pokemonName }) => {
    const { loading, error, data } = useQuery<Query>(searchPokemon, { variables: { name: pokemonName } })

    if (loading) return <>Loading...</>
    if (error) return <>Error! {error.message}</>
    if (!data || !data.pokemon) return <>No Data.</>

    return (
        <>
            <div>No: {data.pokemon.number}</div>
            <div>Name: {data.pokemon.name}</div>
            {data.pokemon.image ? <img src={data.pokemon.image} alt={data.pokemon.name ?? ""} /> : <div>no image.</div>}
        </>
    )
}
export { SearchResultField }
