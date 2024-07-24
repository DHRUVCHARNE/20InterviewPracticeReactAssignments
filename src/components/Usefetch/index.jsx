import React from 'react'
import { useState,useEffect } from 'react'
function useFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)

    async function fetchData() {
        setPending(true);
        try {   
            const response = await fetch(url,{...options})
            if (!response.ok) throw new Error(response.statusText)
            
            const result = await response.json()
            setData(result)
            setPending(false)
            
        } catch (error) {
            setError(`${error} Error Occured !`)
            setPending(false)
            setData(null)
            
        }
    }

    useEffect(() => {
        fetchData()
    },[url])
    
  return {data,error,pending}
}

export default useFetch