import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../../src/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { app } from '../../lib/firebaseConfig';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'

const db = getFirestore(app);

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
        //console.log('guardado krnal', user);
        try {
            await addDoc(collection(db, 'Notes'), {
                ...user
            })
        } catch (error) {
            console.log(error);
        }
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
                <div className='iconContainer'>
                <button className='buttonSave'><FontAwesomeIcon icon={faFloppyDisk} /></button>
                <FontAwesomeIcon icon={faTrashCan} onClick={() => navigateTo('/')} />
                </div>
            </form>
            
        </div >

    )
}

export default NotesView