import logo from './logo.svg';
import './App.css';

function App() {

  const canvasRef = useRef(null)

  //HANDLERS:
  const startDrawing = () => {

  }

  const finishDrawing = () => {
    //asign in to mouseUp
  }

  const draw = () => {

  }

  return (
    <canvas
      onMouseDown = {startDrawing}
      onMouseUp = {finishDrawing}
      onMouseMove = {startDrawing}
      ref = {canvasRef}
    />
  );
}

export default App;
