import { FormEvent, useRef } from "react"

type PropType = {
    setpokemonName: React.Dispatch<React.SetStateAction<string>>
}

const SearchForm: React.FC<PropType> = ({ setpokemonName }) => {
    const ref = useRef<HTMLInputElement>(null)

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        if (ref !== null && ref.current !== null) {
            setpokemonName(ref.current.value)
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" ref={ref} placeholder="input Pokemon's name" />
            <input type="submit" value="Search"></input>
        </form>
    )
}

export { SearchForm }
