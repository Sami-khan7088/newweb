import React, { useState } from 'react'

const Bgimg = () => {
    const [bg,setBg]=useState(false)
    setTimeout(() => {
        setBg(!bg)
    },3000);
  return (
      <>
    <div className={!bg ? "bgimg1":"bgimg2"}>
        <div className='heading'>
        <div>
            <p className='para1'>INNOVATION</p>
            <p className='para2'>We Create The Opportunities</p>
        </div>
        </div>
    </div>
    <div className='bLeader'>
        <div className='bLeader1'>
            <p id='p1'>Partner with Bussiness Leaders</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className='bLeader2'>
            <button>Read More</button>
        </div>
    </div>
    </>
  )
}

export default Bgimg;