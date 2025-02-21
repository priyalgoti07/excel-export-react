import { useState } from "react"

const DaynamicSum = () => {
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("")
    const [sumtwoNumber, setSumtwoNumber] = useState("")
    const [error, setError] = useState("");

    const someTwonumber = () => {
        if (isNaN(Number(firstInput)) || isNaN(Number(secondInput))) {
            setError("Please enter valid numbers.");
            setSumtwoNumber(null);
        } else {
            setError("");
            setSumtwoNumber(Number(firstInput) + Number(secondInput));
        }
    };
    return (
        <>
            <h1>DaynamicSum</h1>
            <input type="text" value={firstInput} onChange={(e) => setFirstInput(e.target.value)} />
            <input type="text" value={secondInput} onChange={(e) => setSecondInput(e.target.value)} />
            <button onClick={someTwonumber}>Add Two Number</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <h2>Sum: {sumtwoNumber !== null ? sumtwoNumber : ""}</h2>
        </>
    )
}

export default DaynamicSum