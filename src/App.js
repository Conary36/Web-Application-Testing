import React, {useState} from 'react'
import Timer from './Timer'
import BottomRow from './BottomRow'
import Display from './Display'
import Dashboard from './Dashboard'
import './App.css';


function App() {

const [strikes, setStrikes] = useState(0);
const [balls, setBalls] = useState(0);
const [at_bat, setAt_bat] = useState(1);
const [fouls, setFouls] = useState(0)

  


  return (
    <>
    <section className="scoreboard">
      <div className="topRow">
        <Display strikes={strikes} balls={balls} at_bat={at_bat} fouls={fouls}/>
        <div className='timer'><Timer/></div>
      </div>
      <BottomRow/>
    </section>
  
      <Dashboard
        strikes={strikes}
        balls={balls}
        at_bat={at_bat}
        fouls={fouls}
      />
  </>
  
  );
}

export default App;
