import React from 'react'

const Display = ({strikes, balls, at_bat, fouls}) => {


    return(
        <div>
            <h2>Batter Up: {at_bat}</h2>
            <p>Strikes: {strikes}</p>
            <p>Balls: {balls}</p>
            <p>Foul Ball: {fouls}</p>
        </div>

    )
}

export default Display;