const apiKey = 'U0li3l4fheKE0wthfedoX9qPbkZ6Z1jt';

export default  function getGifs({keyword = 'morty'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            if(Array.isArray(data)){
                const gifs = data.map(image => {
                    const {images, title,id} = image
                    const { url } = images.downsized_medium
                    return { title, id , url}
                })
                return gifs
            }
        })
  
}