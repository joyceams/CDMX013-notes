import { useNavigate } from 'react-router-dom';
import '../../../src/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFloppyDisk, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function NotesView() {
    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    };

    const initialValue = {
        title: '',
        notetext: ''
    }

    const [user, setUser] = useState(initialValue)

    const getInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const saveData = async (e) => {
        e.preventDefault();
        console.log('guardado krnal', user);
        setUser({ ...initialValue })

    }

    return (
        <div className='NotesView'>
            <form onSubmit={saveData}>
                <div className='titleHeader'>
                    <input type="text" name='title' className='title' placeholder='Title'
                        onChange={getInputs} value={user.title} />
                    <FontAwesomeIcon icon={faArrowLeftLong} onClick={() => navigateTo('/')} />
                </div>

                <div className='textInputArea'>
                    <textarea name='notetext' placeholder='Your text here'
                        onChange={getInputs} value={user.notetext} />

                </div>

                <button className='save'>SAVE</button>

                {/* <FontAwesomeIcon icon={faFloppyDisk} onClick={() => navigateTo('/')} />
                <FontAwesomeIcon icon={faTrashCan} onClick={() => navigateTo('/')} /> */}
            </form>
        </div >

    )
}

export default NotesView