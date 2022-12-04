import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './components/noauth/Login';
import MainView from "./components/auth/MainView";
import NotesView from './components/auth/NotesView';



function App() {
  const { user, setUSer } = useState(null);

  if (!user) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path='/main' element={<MainView />} />
      <Route path='/notes' element={<NotesView />} />
    </Routes>
  );
}
 
export default App; 
