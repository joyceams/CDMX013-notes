import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './components/noauth/Login';
import MainView from "./components/auth/MainView";
import { NotesView } from "./components/auth/NotesView";



function App() {
  return (
    <MainView />

  );
}

export default App; 
