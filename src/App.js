import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './components/noauth/Login';
import MainView from "./components/auth/MainView";
import NotesView from './components/auth/NotesView';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (userfirebase) => {
    if (userfirebase) {
     setUser(userfirebase)
     console.log(userfirebase );
    } else {
      setUser(null)
      console.log('me salí');
    }
  });

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <Routes>
      <Route path='/' element={<MainView />} />
      <Route path='/notes' element={<NotesView />} />
      <Route path='*' element={<h1>No existe</h1>} />
    </Routes>
  );
}

export default App; 
