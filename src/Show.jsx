import { useState } from "react"

export default function Show () {
    const [show, setShow] = useState(false)

    const showDisplay = () => {
        setShow(true)
    }
    const hideDisplay = () => {
        setShow(false)
    }
    

    return (
        <div className="btnDiv">
            {
                show === true && <p>Hello, React Learner!</p>
            }
            <button onClick={showDisplay}>Show</button>
            <button onClick={hideDisplay}>Hide</button>
        </div>
    )
}


// import React, { useState } from "react";

// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleText = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <button onClick={toggleText}>
//         {isVisible ? "Hide" : "Show"} Text
//       </button>

//       {isVisible && <p>Hello React learner</p>}
//     </div>
//   );
// }

// export default App;
