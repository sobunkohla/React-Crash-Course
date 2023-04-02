import React, {useState} from "react"

function Count () {
const [arr, setArr] = useState([]);

    return (
        <> 
      <button onClick={() => setArr(prev =>[...prev, "-"])}>-</button>
      <button onClick={() => setArr(prev =>[...prev, "+"])}>+</button>
      <span>{arr.toString()}</span>

        </>
    )
}

export default Count