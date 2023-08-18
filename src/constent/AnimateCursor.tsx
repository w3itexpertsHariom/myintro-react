import { useState } from "react";

const AnimateCursor = () => {
  const [position, setPosition] = useState({
    x: 0, y: 0
  })
  window.onmousemove = function (e) {

    setPosition({
      x: e.pageX, y: e.pageY
    });



  }
  return (
    <>
      <div className="cosur_container">
        <div id="custom_cursor" style={{
          left: position.x,
          top: position.y
        }}></div>
      </div>
    </>
  )
}

export default AnimateCursor