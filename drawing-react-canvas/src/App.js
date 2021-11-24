import React, {useRef, useEffect, useState} from 'react';
//import later './App.css';

function App() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect( () => {

    const canvas = canvasRef.current

    //To support computers with higher screen density (such as mac with retina) we'll double the pixel density::
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    //Define 2d context
    const context = canvas.getContext('2d')
    context.scale(2,2)
    context.lineCap = 'round'
    context.strokeStyle = 'black'
    context.lineWidth = 5
    contextRef.current = context;
  }, []  )

  //HANDLERS:
  const startDrawing = ({nativeEvent}) =>  {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    //asign in to mouseUp

    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({nativeEvent}) => {
    //if we're no drawing - don't draw the line
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  return (
    <canvas
      onMouseDown = {startDrawing}
      onMouseUp = {finishDrawing}
      onMouseMove = {draw}
      ref = {canvasRef}
    />
  );
}

export default App;
