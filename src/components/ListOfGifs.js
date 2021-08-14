import { useEffect,useState } from 'react'
import getGifs from '../services/getGifs';
import Gif from "./Gif"

export default function ListOfGifs({ params }) {
    
    const { keyword } = params
    const [gifs,setGifs] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            });
     
    }, [keyword])
  
    if(loading) return <i>Loading...</i>
    
    return <div>
    {
        gifs.map(singleGif =>
            <Gif
                key={singleGif.id}
                title={singleGif.title}
                url={singleGif.url}
                id={singleGif.id}
            />
        )
    }
    </div>
}