import React,{useState} from 'react'

export default function HookState1() {
 const[count,setCount] = useState(0)

    const onClickk=()=>{
        setCount(count+1)
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={onClickk}>+</button>
        </div>
    )
}
