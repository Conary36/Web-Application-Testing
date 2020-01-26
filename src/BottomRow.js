import React from "react";
import "./App.css";


const BottomRow = ({ strikes, balls, at_bat, fouls }) => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Strike</h3>
        <div className="down__value">{strikes}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">At Bat</h3>
        <div className="toGo__value">{at_bat}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball</h3>
        <div className="ballOn__value">{balls}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Foul</h3>
        <div className="quarter__value">{fouls}</div>
      </div>
    </div>
  );
};

export default BottomRow;
