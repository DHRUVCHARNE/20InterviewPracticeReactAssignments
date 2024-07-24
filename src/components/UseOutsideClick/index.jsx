import React from 'react'
import { useState,useEffect } from 'react'
function useOutsideClick(ref,handler) {

    useEffect(() => {
      
        function listener(e) {
            if (!ref.current || ref.current.contains(e.target)) {
          return

            }
           
     handler(e)
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener("touchstart", listener);
        
        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener("touchstart", listener);
        }

  },[handler,ref])

  return (
    <div>useOutsideClick</div>
  )
}

export default useOutsideClick