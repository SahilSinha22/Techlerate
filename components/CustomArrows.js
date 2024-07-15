import React from 'react'

const CustomArrows = () => {
  const  copy= document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);
  return (
    <div id="slider">
    <input type="radio" name="slider" id="slide1" checked/>
    <input type="radio" name="slider" id="slide1" />
    <input type="radio" name="slider" id="slide1" />
    <input type="radio" name="slider" id="slide1" />
  <div id='slides'>
    <div id='overflow'>
      <div className='inner'>
        <div className='slide slide_1'>
          <div className='slide-content'>
            <h2>
              slide1
            </h2>
            <p>Content</p>
          </div>
        </div>

        <div className='slide slide_2'>
          <div className='slide-content'>
            <h2>
              slide2
            </h2>
            <p>Content</p>
          </div>
        </div>

        <div className='slide slide_3'>
          <div className='slide-content'>
            <h2>
              slide3
            </h2>
            <p>Content</p>
          </div>
        </div>
        <div className='slide slide_4'>
          <div className='slide-content'>
            <h2>
              slide4
            </h2>
            <p>Content</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id='controls'>
    <label for="slide1"></label>
    <label for="slide2"></label>
    <label for="slide3"></label>
    <label for="slide4"></label>
  </div>
  <div id='bullets'>
  <label for="slide1"></label>
    <label for="slide2"></label>
    <label for="slide3"></label>
    <label for="slide4"></label> 
  </div>
    </div>
  )
}

export default CustomArrows
