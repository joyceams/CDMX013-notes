
import '../../../src/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

export const NotesView = () => {
    return (
        <div className='NotesView'>
            <h1>Title</h1>
            <p></p>
            <FontAwesomeIcon icon={faFloppyDisk} />
            </div>
    )
}
