
import '../../../src/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

export const NotesView = () => {
    return (
        <div className='NotesView'>
            <input type="text" className='title' placeholder='Title' />
            <input type="text" placeholder='Your text here' />
            <FontAwesomeIcon icon={faFloppyDisk} />
            </div>
    )
}
