import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/assets/logoTxt.png'
import fb from '../../public/assets/fb2022.png'
import ig from '../../public/assets/ig2022.png'
import twt from '../../public/assets/twitter.png'
import lnk from '../../public/assets/linkedin.png'
// import { WindowTwoTone } from '@mui/icons-material'


function Navbar() {
    return (
        <div className='nav-section-1'>
            <div className="nav-title">
                <Image src={Logo} height={40} width={40} />
                {/* <div style={{width: 20}}></div> */}
                {/* <h3 style={{}}>Txtend is now</h3> */}
                <h1 className='nav-title-text'>Textmi</h1>
            </div>
            <div className="nav-menu">
            {/* <Link href={www.facebook.com}/> */}

                <p className='text-ll' href="https://facebook.com/txtend">
                    <Image src={fb} height={35} width={35}/>
                    Facebook</p>
                    <p className='text-ll' href="https://www.instagram.com/textmi_india">
                    <Image src={ig} height={35} width={35}/>
                    Instagram</p> 
                    <p className='text-ll' href="https://twitter.com/Textmi_India?t=d-PI-vdsyObJOCMv6IoI5A&s=08">
                    <Image src={twt} height={35} width={35}/>
                    Twitter</p> 
                    <p className='text-ll' href="https://www.linkedin.com/company/textmi">
                    <Image src={lnk} height={35} width={35}/>
                    Linkedin</p>  
                {/* <p className='text-l'>Instagram</p>
                <p className='text-l'>Linkedn</p>
                <p className='text-l'>Twitter</p> */}
            </div>
        </div>
    )
}



export default Navbar

//
{/* <a href="https://icons8.com/icon/W0xu6u7K9A0F/search">Search icon by Icons8</a> */ }


