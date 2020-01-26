import React from 'react'

const Dashboard = ({strikes, setStrikes, balls, setBalls, at_bat, setAt_bat, fouls, setFouls}) => {

    const batterUp =() =>{

        setStrikes(0);
        setBalls(0);
        setAt_bat(1);
        setFouls(0);
        
    }

    const nextStrike = () =>{
        console.log(strikes);
        if(strikes < 3){
            console.log('fire!');
            setStrikes(strikes + 1);
         }else{
            batterUp();
            setAt_bat(at_bat + 1);
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
        if (fouls <= 2){
            setStrikes(strikes + 1)
        }else{
            batterUp();
        }
    }


    return(
        <section className="buttons">
            <div className="homeButtons">
                <button onClick={nextStrike}>Strike</button>
                <button onClick={nextBall}>Ball</button>
                <button onClick={nextFoul}>Foul</button>
                <button onClick={batterUp}>Hit</button>
            </div>
         </section>

    )
}

export default Dashboard;