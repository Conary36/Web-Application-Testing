import React from 'react'

const Dashboard = ({strikes, setStrikes, balls, setBalls, at_bat, setAt_bat, fouls, setFouls}) => {

    const batterUp =() =>{

        setStrikes(0);
        setBalls(0);
        setAt_bat(at_bat + 1);
        setFouls(fouls + 1);
        
    }

    const nextStrike = () =>{
        if(strikes < 2){
            setStrikes(strikes + 1);
         }else{
            batterUp();
        }
    }

    const nextBall = () => {
        if (balls < 3){
            setBalls(balls + 1);
        }else{
            batterUp();
        }
    }

    const nextFoul = () =>{
        if (fouls === 2){
            setFouls(strikes + 1)
        }else{
            batterUp();
        }
    }


    return(
        <section className="buttons">
            <div className="homeButtons">
                <button onclick={nextStrike}>Strike</button>
                <button onClick={nextBall}>Ball</button>
                <button onClick={nextFoul}>Foul</button>
                <button onClick={batterUp}>Hit</button>
            </div>
         </section>

    )
}

export default Dashboard;