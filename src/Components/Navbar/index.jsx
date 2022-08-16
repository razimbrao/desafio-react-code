import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Navbar = () => {
    return (
        <nav className="navbar">
            <FontAwesomeIcon icon={solid('user-secret')} />
            <FontAwesomeIcon icon={regular('coffee')} />
            <FontAwesomeIcon icon={brands('twitter')} />
        </nav>
    )
}

export default Navbar;