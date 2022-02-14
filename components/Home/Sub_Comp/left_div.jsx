import React from 'react'
import { useSelector } from 'react-redux'
import { MY_CONTROLLERS } from '../my_controllers'
import Image from 'next/image'
import Fast from '../../../public/assets/fast.svg'
import { findDOMNode } from 'react-dom'

function Left_div({ props }) {

    const storeData = useSelector((state) => state.controller_reducer)
    const initialData = MY_CONTROLLERS[0]
    const finalData = storeData.set_controller

    return (
        <>
            {
                finalData == undefined ?
                    <div className="right-div">
                        <div className='image'>
                            <Image src={initialData.Image_Src} alt={`key-features-img` + initialData.id} loading='eager' />
                        </div>
                    </div>
                    :
                    <div className="right-div">
                        <div className='image'>
                            <Image src={finalData.Image_Src} alt={`key-features-img` + finalData.id} loading='eager' />
                        </div>
                    </div>
            }
        </>
    )
}

export default Left_div
