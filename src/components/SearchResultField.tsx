import { useQuery } from "@apollo/client"
import { Query } from "../@types/types"
import { searchPikachu } from "../graphql/queries"

const SearchResultField = () => {
    const { loading, error, data } = useQuery<Query>(searchPikachu)

    if (loading) return <>Loading...</>
    if (error) return <>Error! {error.message}</>

    return (
        <div>
            <div>No: {data?.pokemon?.number}</div>
            <div>Name: {data?.pokemon?.name}</div>
            {data?.pokemon?.image ? (
                <img src={data?.pokemon?.image} alt={data?.pokemon?.name ?? ""} />
            ) : (
                <div>no image.</div>
            )}
        </div>
    )
}
export { SearchResultField }
