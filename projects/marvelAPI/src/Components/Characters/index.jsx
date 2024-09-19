export default function Characters({ data, onClick }){
    return(
        <div>
            {data.map(character => {
                return (
                    <div key={character.id} className="characterCard" onClick={() => onClick(character.id)}
                    style={{
                        background: `url(${character.thumbnail.path}.${character.thumbnail.extension}) no-repeat`,
                        backgroundSize: 'cover'
                    }}
                    >
                        <div className="caption">
                            {character.name}
                        </div>
                        <div>View comics</div>
                    </div>
                )
            })}
        </div>
    )
}