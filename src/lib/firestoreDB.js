import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of cities from your database
async function getNotes(db) {
  const notesCol = collection(db, 'cities');
  const notesSnapshot = await getDocs(notesCol);
  const notesList = notesSnapshot.docs.map(doc => doc.data());
  return notesList;
};

export const saveNotes = (note) => {
    addDoc(collection(db, 'notes'), note);
}
