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
        <div className="col text-center text-white mt-5">
            <span className="text-4xl font-bold">{date.toLocaleTimeString()}</span>
            <br />
            <span className="font-bold">{date.toLocaleDateString()}</span>
        </div>
    )
}

export default Timer