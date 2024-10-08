import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Result from './Result';

const secretNum=Math.floor(Math.random()*10)+1

function App() {

  const [term ,setTerm] = useState("")
  const handlechange=(e)=>{
    setTerm(e.target.value)
  }
  return (
    <div className="Container">
      <div className="head">
       <label htmlfor='term'>Guess the Number between 1 to 10 </label>

      </div>
      <input id='term'
      type='text'
      name='term'
      onChange={handlechange}
      />
      <Result secretNum={secretNum} term={term}/>
    </div>
  );
}

export default App;
