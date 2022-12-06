import { useNavigate } from 'react-router-dom';
import {logOutAccount} from '../../lib/exit';
import '../../../src/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';


function MainView() {
    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    };

    return (
        <div className="MainView">
            <Header />
            <p className='welcometext'>Click on the ‘write’ icon to get started</p>
            <div className='writeIcon'>
                <FontAwesomeIcon icon={faPenToSquare} size="xl" onClick={() => navigateTo('/notes')} />
            </div>
            <div>
                <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" onClick={logOutAccount} />
            </div>
        </div>
    );
}

export default MainView;