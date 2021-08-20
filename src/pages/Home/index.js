import { useCallback } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/index'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'

export default function Home(){
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        //navegar a otra ruta
        pushLocation(`search/${keyword}`)
    }, [pushLocation])

   
    return (
        <>
            <SearchForm onSubmit={handleSubmit}/>
            <div className="App-main">
                    <div className="App-results">
                    <h3 className="App-title">Ultima busqueda</h3>
                    <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <TrendingSearches />
                </div>
            </div>   
        </>
    )
}