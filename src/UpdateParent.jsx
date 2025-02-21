import { useState } from "react"
import Child from "./Child"

const UpdateParent = () => {
    const [value, setValue] = useState("I need to be updated from my child")
    return (
        <div style={{ border: '2px solid gray' }}>
            <h1>Parent</h1>
            <p style={{ border: '2px solid red', margin: '20px' }}>{value}</p>
            <Child setValue={setValue} />
        </div>
    )
}

export default UpdateParent