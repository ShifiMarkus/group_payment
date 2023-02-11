//import logo from './logo.svg';
import './App.css';
import Router from './files.js/Router';
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect,useState } from 'react';
import axios from 'axios';
import service from './files.js/Services';
import Nav from './files.js/nav';
function App() {

  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   service.getUsers().then(res=>{
  //     setUsers(res)
  //   })

  //   // service.addUser().then(res=>{
  //   //   console.log('User added ')
  //   // })
  // }, [])

  return (
    <div className="App">
      <>
      <Router></Router>
      </>
    </div>
  );
}

export default App;
