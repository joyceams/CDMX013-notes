import { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import '../../../src/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { app } from '../../lib/firebaseConfig';
import MainView from './MainView';


const db = getFirestore(app);

export default function NoteList() {
    const [allnotes, setList] = useState([])

    //renderiza lista de notas
    useEffect(() => {
        const getNotesList = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Notes'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setList(docs)

            } catch (error) {
                console.log(error)
            }
        }
        getNotesList()
    }, [])

    return (
        <div className='NotesContainer'>
            <div className='cardBody'>
                {/*   {allnotes.length === 0 && <MainView/>} */}
                {
                    allnotes.map(oneNote => (
                        <div className='noteBody' key={oneNote.id}>
                            <div className='titleN'>{oneNote.title}</div>
                            <div className='contentN'>{oneNote.notetext}</div>
                            <div className='editIcons'>
                                <button className='buttonDelete'><FontAwesomeIcon icon={faTrashCan} /></button>
                                <button className='buttonEdit'><FontAwesomeIcon icon={faPen} /></button>
                            </div>
                        </div>
                    ))
                }

            </div>
            {/*  {allnotes&&allnotes.map(oneNote=><p key={oneNote.id}>{oneNote.notetext}</p>)
            } */}

        </div>
    )
}
