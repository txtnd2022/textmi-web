import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/assets/logoTxt.png'



function Navbar() {
    return (
        <div className='nav-section-1'>
            <div className="nav-title">
                <Image src={Logo} height={60} width={60} />
                <h1 className='nav-title-text'>Textmi</h1>
            </div>
            <div className="nav-menu">
                {/* <p className='text-l'>Multi-platform</p> */}
                {/* <p className='text-l'>Home</p> */}
                {/* <p className='text-l'>Key Features</p> */}
                {/* <p className='text-l'>Docs</p> */}
                {/* <span class="material-icons">search
                </span> */}
            </div>
        </div>
    )
}



export default Navbar

//
{/* <a href="https://icons8.com/icon/W0xu6u7K9A0F/search">Search icon by Icons8</a> */ }


