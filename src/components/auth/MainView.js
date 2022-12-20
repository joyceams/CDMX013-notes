import { useNavigate } from 'react-router-dom';
import '../../../src/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import Header from './Header';
import NoteList from './NoteList'


function MainView() {
    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    };

    return (
        <div className="MainView">
            <Header />
            <NoteList />
            <div className='writeIcon'>
                <FontAwesomeIcon icon={faPenToSquare} size="xl" onClick={() => navigateTo('/notes')} />
            </div>
        </div>
    );
}

export default MainView;