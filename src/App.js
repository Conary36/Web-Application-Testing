import React, {useState} from 'react'
import Timer from './Timer'
import Display from './Display'
import Dashboard from './Dashboard'
import './App.css';


function App() {

const [strikes, setStrikes] = useState(0);
const [balls, setBalls] = useState(0);
const [at_bat, setAt_bat] = useState(0);
const [fouls, setFouls] = useState(0)

  


  return (
    <>
    <section className="scoreboard">
      <div className="topRow">
        <div className='timer'><Timer/></div>
      </div>
        <Display strikes={strikes} balls={balls} at_bat={at_bat} fouls={fouls}/>
    </section>
  
      <Dashboard
        strikes={strikes}
        setStrikes={setStrikes}
        balls={balls}
        setBalls={setBalls}
        at_bat={at_bat}
        setAt_bat={setAt_bat}
        fouls={fouls}
        setFouls={setFouls}
      />
  </>
  
  );
}

export default App;
