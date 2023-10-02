import { useEffect, useState } from "react"
import { MAX, MIN } from "../Constant";




const ProgressBar = ({value = 0 }) => {
    const [percent, setPercent] = useState (value);
    useEffect(()=>{
        setPercent(Math.min(100,Math.max(value,0) ) )
        

    },[value] )
    return (
        <div className="Progress">
            <span
                 style={{color: percent > 49 ? 'white': 'black' }} > 
                 {percent.toFixed()}%
                 </span>
            <div
             style={{width:`${percent}% `}}
            // style={{transform:`scaleX(${percent / MAX}) `,transformOrigin:'left'  }}
            role='progressbar'
            aria-valuemin={MIN}
            aria-valuemax={MAX}
            aria-valuenow={percent.toFixed()}
            />
        </div>
    )
}
export default ProgressBar