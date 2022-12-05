import { useNavigate } from 'react-router-dom';
import '../../../src/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function NotesView(props) {
    console.log(props);
    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    };

    return (
        <div className='NotesView'>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigateTo('/')}/>
            <input type="text" className='title' placeholder='Title' />
            <input type="text" placeholder='Your text here' />
            <FontAwesomeIcon icon={faFloppyDisk} onClick={() => navigateTo('/')}/>
            </div>
    )
}

export default NotesView