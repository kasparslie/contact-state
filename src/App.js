import React from 'react';
import './App.css';
import Contact from './Components/contact'
//import chaterBox from './Components/userlist'
import usersList from './Components/contactList'

//const chatOne = chaterBox.map(e => {return  <Contact {...e}/> })
const newUsers = usersList.map(e =>{return <Contact {...e}/>})
function App() {
  return (
    <div className="App">
    {newUsers}
    </div>
  );
}

export default App;
