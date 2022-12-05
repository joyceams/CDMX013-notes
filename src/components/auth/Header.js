import '../../../src/style.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Header () {
    return (
        <div>
            <div className='Header'>
            <FontAwesomeIcon icon={faBars} size="xl" />
            <h1>All Notes</h1>
        </div>
        
</div>
        );
    }
export default Header