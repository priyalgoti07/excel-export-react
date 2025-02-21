/* eslint-disable react/prop-types */

const Child = ({ setValue }) => {
    return (
        <div style={{border:'2px solid gray', margin:"20px"}}>
            <h1>Child</h1>
            <button onClick={() => setValue("i am child Componets")}>Change Parent VAlue</button>
        </div>
    )
}

export default Child