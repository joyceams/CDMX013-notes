import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './style.css';
import Login from './components/noauth/Login';
import MainView from "./components/auth/MainView";
import NotesView from './components/auth/NotesView';
import NotFound from './components/NotFound';

const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (userfirebase) => {
    if (userfirebase) {
      setUser(userfirebase)
    } else {
      setUser(null)
    }
  });

  if (!user) {
    return (
      <Routes>
    <Route path='/' element={<Login setUser={setUser} />} />
    <Route path='*' element={<NotFound />} />
    </Routes>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<MainView />} />
      <Route path='/notes' element={<NotesView />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App; 
