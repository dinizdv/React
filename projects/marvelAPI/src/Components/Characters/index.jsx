import '../../styles/characters.scss'
// import bgCharacters from '../../assets/bgCharacters.jpg'

export default function Characters({ data, onClick }){
    return(
        <div className='containerCharacters'>
            {/* <img src={bgCharacters} alt="" /> */}
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
                        <div className="caption viewComics">
                            View comics
                        </div>
                    </div>
                )
            })}
        </div>
    )
}