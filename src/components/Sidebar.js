import React from 'react'
import logo from './logo.jpg'
import {Link} from 'react-router-dom';
function  Sidebar(){
    return(
        <>
          <div className='col-md-2 '>
            <div className='text-center'>
                <i class="fa-solid fa-bars"></i>
                <img src={logo} width='200'/>
            </div><hr></hr>
            <div className='sidebar'>
                <ul>
                    <Link to="Home"><li className='a'><i class='fa-solid fa-house'></i>Home</li></Link>
                    <Link to="User"><li className='a'><i class='fa-solid fa-person'></i>User</li></Link>
                    <Link to="Shorts"><li className='a'> <i class='fa-solid fa-bolt'></i>Shorts</li></Link>
                    <Link to="Products"><li className='a'> <i class='fa-solid fa-bolt'></i>products</li></Link>
                    <li className='a'> <i class='fa-solid fa-clapperboard'></i> Subscriptions</li><hr></hr>
                    <li className='a'><i class="fa-solid fa-person"></i> You</li>
                    <li className='a'> <i class="fa-solid fa-camera-retro"></i> Your Channel</li>
                    <li className='a'> <i class="fa-sharp fa-solid fa-clock-rotate-left"></i> History</li><hr></hr>
                </ul>
            </div>
          </div>
        </>
    )
}
 
export default Sidebar;