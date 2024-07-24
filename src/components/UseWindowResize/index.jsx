import React,{useState,useLayoutEffect} from 'react'

function useWindowResize() {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    })
 
    useLayoutEffect(() => {
        
        function updateSize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)

    },[])

  return windowSize
}

export default useWindowResize