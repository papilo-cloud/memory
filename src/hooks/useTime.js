import { useEffect, useState } from "react";

function useTime(cont) {
    const [count, setCount] = useState(0)
    const [startTime, setStartTime] = useState(cont)

    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
    }, [])

    return {
        count,
        startTime,
        setStartTime
    }
}

export default useTime;