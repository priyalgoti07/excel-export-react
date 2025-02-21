import { useEffect, useState } from "react"

const PracticesAPI = () => {
    const [apiData, setApiData]=useState([])

    useEffect(() => {
        callData()
    },[])

    async function callData(){
        try {
            let result = await fetch("https://jsonplaceholder.typicode.com/posts")
            let data = await result.json()
            setApiData(data)
            console.log("data",data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
     
    }
    return (
        <div>
            <h1>PracticesAPI</h1>
            {apiData.map((item)=> <p key={item.id}>
            {item.title}
            </p>)}
        </div>
    )
}

export default PracticesAPI