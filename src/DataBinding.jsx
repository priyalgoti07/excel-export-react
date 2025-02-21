import { useState } from "react"

const DataBinding = () => {
    const [text, setText] = useState("")
    return (
        <div><h1>DataBinding</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
        </div>
    )
}

export default DataBinding