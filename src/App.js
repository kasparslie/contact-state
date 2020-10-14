import React from 'react';
import './App.css';
import Contact from './Components/contact'
import chaterBox from './Components/userlist'
const chatOne = chaterBox.map(e => {return  <Contact {...e}/> })
function App() {
  return (
    <div className="App">
    {chatOne}
    </div>
  );
}

export default App;
