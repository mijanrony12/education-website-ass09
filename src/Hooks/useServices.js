import { useEffect } from "react"
import { useState } from "react"

const useServices = () => {
    const [ services, setServices ] = useState([]);
    
    // get data
    useEffect((id) => {
        fetch('./FakeData.json')
            .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return [services, setServices]
}
export default useServices;