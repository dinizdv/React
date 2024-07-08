import './title.css'

export default function Title( {children, name} ){
    return(
        <div className="title">
            {children} {/* children => displays icon of the text */}
            <span>{name}</span>
        </div>
    )
}