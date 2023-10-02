import { useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import { useEffect } from 'react'


export default function App() {
  const [value, setValue] = useState(0)


  useEffect(()=>{
    setInterval(()=>{
   setValue((val)=>val + 1)

    }, 100 );

  },[value] );
  return (
    <div className='app'>
      <span>progress Bar</span>
      <ProgressBar
       value={value}
       
       />
    </div>
  )
}