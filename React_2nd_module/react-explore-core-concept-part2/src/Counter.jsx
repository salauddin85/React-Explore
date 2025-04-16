import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    // console.log('Counter component rendered', count,setCount)
    function handleAdd() {
        
        setCount(count + 1)
    }
    function handleSubtract() {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleAdd}>Increment</button>
            <button onClick={handleSubtract}>Decrement</button>
        </div>
    )
}