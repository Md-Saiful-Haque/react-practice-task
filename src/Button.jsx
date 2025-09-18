import { useState } from "react"

export default function Button () {
   const [count, setCount] = useState(0)
    const getCount = () =>{
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if(count !== 0){
           setCount(count - 1);
        }
        
    }

    const clear = () => {
        setCount(0)
    }


    return (
        <div className="btnDiv">
            <h3>Count: {count}</h3>
            <button onMouseMove={getCount} className="btn">Increase</button>
            <button onClick={decreaseCount} className="btn">Decrease</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}