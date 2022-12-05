import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './components/noauth/Login';
import MainView from "./components/auth/MainView";
import NotesView from './components/auth/NotesView';



function App() {
  const [user, setUSer] = useState(true);

  if (!user) {
    return <Login setUser={setUSer} />;
  }

  return (
    <Routes>
      <Route path='/' element={<MainView />} />
      <Route path='/notes' element={<NotesView />} />
    </Routes>
  );
}

export default App; 
