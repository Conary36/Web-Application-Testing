import React, {useState} from 'react';
import Timer from './Timer'
import './App.css';




function App() {

const [strikes, setStrikes] = useState(0);
const [balls, setBalls] = useState(0);
const [at_bat, setAt_bat] = useState(1);

  // function strike() {
  //   if(value.strike < 2){
  //   setValue({ ...value, strike: value.strike + 1 });
  //   }else{
  //     setValue({...value, strike: value.strike === 0})
  //   }
  // }


  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className='timer'><Timer/></div>
      </div>
    </section>
  );
}

export default App;
