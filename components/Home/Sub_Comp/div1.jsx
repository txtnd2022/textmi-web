import React from 'react'
import Left_div from './left_div'
import Right_div from './right_div'
import { useSelector } from 'react-redux'
import { MY_CONTROLLERS } from '../my_controllers'
import { useAnimate } from 'react-simple-animate';

function Div1({ }) {

    const storeData = useSelector((state) => state.controller_reducer)
    const initialData = MY_CONTROLLERS[0]
    const finalData = storeData.set_controller

    // console.log(storeData.style)


    return (
        <>
            <div className='inside-body-section'>

                {
                    finalData == undefined
                        ?
                        <>
                            <Right_div props={initialData} />
                            <Left_div props={initialData} />
                        </>
                        :
                        <>

                            <Right_div style={storeData.style} props={finalData} />
                            <Left_div style={storeData.style} />
                        </>
                }

            </div>
        </>
    )
}

export default Div1
