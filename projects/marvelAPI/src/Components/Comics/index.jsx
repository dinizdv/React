export default function Comics({ data }){
    return(
        <div>
            {data.map((comic) => {
                const detailsUrl = comic.urls.find(
                    (element) => element['type'] === 'detail'
                ).url
            
            return(
                <a 
                    key={comic.id} 
                    className="comicCard"
                    style={{
                        background: `url${comic.thumbnail.path}.${comic.thumbnail.extension} no-repeat center`,
                        backgroundSize: 'cover'
                    }}
                    href={detailsUrl}
                    target='_blank'
                    rel='noreffer'>

                    <div className="caption">
                        {comic.title}
                    </div>
                    <div className="caption">
                        View comic details
                    </div>
                </a>


            )
            })
            
            }
        </div>
    )
}