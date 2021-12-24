import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
    return (
        <header>
            <h1 className="title">
                <Link to="/">
                    CAT API
                </Link>
            </h1>
        </header>
    )
}

export default Header