import './CircleSelector.css'


function CircleSelector(props) {
    return (
      <div className="CircleSelector">
          <button className="selected" onClick={() => {props.circleSelected()}}>SELECT CIRCLE 1</button>
          <button className="selected" onClick={() => {props.circleSelected()}}>SELECT CIRCLE 2</button>
          <button className="selected" onClick={() => {props.circleSelected()}}>SELECT CIRCLE 3</button>
          <button className="selected" onClick={() => {props.circleSelected()}}>SELECT CIRCLE 4</button>
      </div>
    );
  }
  

export default CircleSelector; 