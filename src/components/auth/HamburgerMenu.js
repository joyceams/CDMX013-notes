import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../../../src/style.css';
import { logOutAccount } from '../../lib/exit';


function HamburgerMenu() {
    return (
        <div>
            <div className='hamburger'>
                <FontAwesomeIcon icon={faBars} size="xl" />
                <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" onClick={logOutAccount} />
            </div>

        </div>
    )
}

export default HamburgerMenu;
