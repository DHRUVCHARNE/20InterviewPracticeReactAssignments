import React from 'react'
import useWindowResize from './index.jsx'
function UseWindowResizeTest() {

    const windowsize = useWindowResize()
    const { width, height } = windowsize;

  return (
      <div>
          <h1>Use Window Resize Hook</h1>
          <p>Width:{width}</p>
          <p>Height:{height}</p>
    </div>
  )
}

export default UseWindowResizeTest