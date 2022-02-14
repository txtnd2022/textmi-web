import React from 'react'
import Div1 from './Sub_Comp/div1'
import Div2 from './Sub_Comp/div2'
import Div3 from './Sub_Comp/Div3'
import Div4 from './Sub_Comp/Div4'
import Navbar from '../Navigation'
import Controller from './Sub_Comp/controller'
import Footer from './Sub_Comp/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <div className="body-section">
                <div className="header">
                    <h3 className='text-l'>At Textmi you will get</h3>
                </div>
                <Controller />
                <Div1 />
                <Div2 />
                {/* <Div4 /> */}
                <Div3 />
                <Footer />
            </div>

            {/* icon credit */}

        </>


    )
}

export default Home

