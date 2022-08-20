import React from 'react'
import '../styles/SideNavItem.css'




const SideNavItem = ({icon, image, title}) => {
  return (
    <div className='item'>
        <div className="item__row">
        <div className="item__icon">{icon || <img src={image} alt="" /> }</div> 
        <p className='item__title'>{title}</p>
        </div>
        
    </div>
  )
}

export default SideNavItem