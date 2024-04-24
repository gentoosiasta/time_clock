import { useEffect, useState } from "react"

const Timer = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        
        return () => {
            clearInterval(timer)
        }
    })

    return (
        <div className="col">
            <h1>{date.toLocaleTimeString()}</h1>
            <h3>{date.toLocaleDateString()}</h3>
        </div>
    )
}

export default Timer