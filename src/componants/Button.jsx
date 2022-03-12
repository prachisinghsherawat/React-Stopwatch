import { useRef } from "react"
import { useState } from "react"
import { Display } from "./Display"



export const Button = () => {

    const[timer,setTimer] = useState(0)
    const count = useRef()

    const handleStart = () => {

        count.current = setInterval( () =>{
            setTimer( (timer) => timer +1)
        },1000)

    }

    const handlePause = () => {

        clearInterval(count.current)
        
    }

    const handleResume = () => {

        count.current = setInterval( () =>{
            setTimer( (timer) => timer +1)
        },1000)
    }

    const handleRestart = () => {

        clearInterval(count.current)
        setTimer(0)
        
    }

    return(
        <div id="btnDiv">

           <div className="timeDisplay">
               <Display timer = {timer}/>
           </div>
            
            <div className="btnDisplay">
            <button onClick={handleStart}> Start </button>
            <button onClick={handlePause}> Pause </button>
            <button onClick={handleResume}> Resume </button>
            <button onClick={handleRestart}> Reset </button>
            </div>
            
        </div>
    )
}