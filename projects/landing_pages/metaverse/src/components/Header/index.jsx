import '../../styles/header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">sponsors</a></li>
                    <li><a href="#">presenters</a></li>
                    <li><a href="#">schedule</a></li>
                    <li><a href="#">login</a></li>
                </ul>

                <ul className="ul-social-media">
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">linkedin</a></li>
                    <li><a href="#">instagram</a></li>
                    <li><a href="#" id='buy-tickets'>buy tickets</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header