import React from 'react'
import Data from '../data'
const Services = () => {
    return (
        <div className='services'>
            <h3>OUR SERVICES</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="card_div " >
            {Data.map((current)=>{
                return(
                    <div>
                    <div className='div_icon'>
                    {current.img}
                    </div>
                    <div className="card1">
                    <div className='card-body'>
                        <h5 className="card-title">{current.tittle}</h5>
                        <p className="card-text">{current.para}</p>
                    </div>
                    </div>
                </div>
                )
            })}
                
            </div>
        </div>
    )
}

export default Services