import './App.scss';

import PhoneBook from './components/PhoneBook';
import InformationTable from './components/InformationTable';
import { useState } from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

function App() {
  // treat setInfo as a callback function in Parent component
  const [info, setInfo] = useState([]);
  // console.log('info',info)

  return (
    <div className="App">
      <h1 className='title'>Phone Book</h1>
      {/* pass callback func as a prop to the child componment */}
      <PhoneBook info={info} setInfo={setInfo}/>
      <div className='line'/>
      <InformationTable info={info}/>
      <div className='line'/>
      <div className='footer'>
        <div className='links'>
          <span className='item'>
            <span className='icon'><FaGithub size={16}/></span>
            <a href='https://github.com/conanzahn' target='_blank'>GitHub</a>
          </span>
          <span className='item'>
            <span className='icon'><FiMail size={16}/></span>
            <a href='mailto:conanzahn@gmail.com' target='_blank'>Email</a>
          </span>
          <span className='item'>
            <span className='icon'><FaLinkedin size={16}/></span>
            <a href='https://www.linkedin.com/in/haonan-zhang-unsw/' target='_blank'>LinkedIn</a>
          </span>
        </div>
        <div className='copyright'>&#169;copyright 2022 | made with &hearts; by HAONAN ZHANG</div>
      </div>
    </div>
  );
}

export default App;
