import React from 'react'
import Div1 from './Sub_Comp/div1'
import Div2 from './Sub_Comp/div2'
import Div3 from './Sub_Comp/Div3'
import Div4 from './Sub_Comp/Div4'
import Navbar from '../Navigation'
import Controller from './Sub_Comp/controller'
import Footer from './Sub_Comp/Footer'
import fb from '../../public/assets/fb.png'
import ig from '../../public/assets/ig.png'
import twt from '../../public/assets/twt.png'
import lnk from '../../public/assets/lnkd.png'
import Image from 'next/image'

function Home() {
    return (
        
        <div className="main-body" >
            
            <div className="nav-menu">
            {/* <Link href={www.facebook.com}/> */}

                <p className='text-ll' href="https://facebook.com/txtend">
                    <Image src={fb} height={35} width={25}/>
                    </p>
                    <p className='text-ll' href="https://www.instagram.com/textmi_india">
                    <Image src={ig} height={20} width={20}/>
                    </p> 
                    <p className='text-ll' href="https://twitter.com/Textmi_India?t=d-PI-vdsyObJOCMv6IoI5A&s=08">
                    <Image src={twt} height={20} width={30}/>
                    </p> 
                    <p className='text-ll' href="https://www.linkedin.com/company/textmi">
                    <Image src={lnk} height={20} width={20}/>
                    </p>  
                {/* <p className='text-l'>Instagram</p>
                <p className='text-l'>Linkedn</p>
                <p className='text-l'>Twitter</p> */}
            
            </div>
            <Navbar />
            <div className="body-section">
                <div className="header">
                    <h3 className='text-l'>Experience a new era of</h3>
                </div>
                <Controller />
                {/* <h4></h4> */}
                <Div1 />
                <Div2 />
                <Div4 />
                <Div3 />
                <Footer />
            </div>

            {/* icon credit */}

        </div>


    )
}

export default Home

