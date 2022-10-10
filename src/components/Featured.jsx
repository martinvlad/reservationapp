import React from 'react'
import './featured.css'
function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/302715553.jpg?k=045a4c479caef6c88e17c6f714224c8836010a9c94606d88f4c61e6cfdd5a840&o=&hp=1" alt="" className='featuredImage' />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/302714797.jpg?k=de588eeaba4cac2e067a6423a8bff6aff8021ffdfe9cc592b1a716347b47ed4e&o=&hp=1" alt="" className='featuredImage' />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>523 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/302715553.jpg?k=045a4c479caef6c88e17c6f714224c8836010a9c94606d88f4c61e6cfdd5a840&o=&hp=1" alt="" className='featuredImage' />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>473 properties</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Featured