import React from 'react'
import { useSelector } from 'react-redux'
import { MY_CONTROLLERS } from '../my_controllers'

function Right_div({props}) {
    const storeData = useSelector((state) => state.controller_reducer)
    const initialData = MY_CONTROLLERS[0]
    const finalData = storeData.set_controller

    return (
        <>
            {
                <div className="left-div">
                    <div>
                        <h3 className={props.custome_text} > {props.Name} </h3>
                    </div>
                    <p key={props.key}>{props.Body} </p>
                </div>
            }
        </>
    )
}

export default Right_div
