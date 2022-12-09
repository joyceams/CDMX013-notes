import { useNavigate } from 'react-router-dom';
import '../../../src/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function NotesView() {
    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    };

    return (
        <div className='NotesView'>
            <div className='titleHeader'>
            <input type="text" className='title' placeholder='Title' />
            <FontAwesomeIcon icon={faArrowLeftLong} onClick={() => navigateTo('/')}/>
            </div>
            <div className='textInputArea'>
                <textarea placeholder='Your text here' />
                </div>
            
            <FontAwesomeIcon icon={faFloppyDisk} onClick={() => navigateTo('/')}/>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => navigateTo('/')}/>
            </div>
    )
}

export default NotesView