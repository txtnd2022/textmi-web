import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { select_controller } from '../../../redux/action'
import { MY_CONTROLLERS } from '../my_controllers'
import styled from 'styled-components'
import { useAnimate } from 'react-simple-animate';


function Controller() {

    const dispatch = useDispatch()
    const [controllers, setControllers] = React.useState(MY_CONTROLLERS)
    const [selected, setSelected] = React.useState({
        activeObj: { id: 0 },
        list: [
            { id: 0 },
            { id: 1 },
            { id: 2 }
        ]
    })

    const [ind, setInd] = React.useState(true)
    const storeData = useSelector((state) => state.controller_reducer)
    const initialData = MY_CONTROLLERS[0]
    const finalData = storeData.set_controller

    const { play, style, isPlaying } = useAnimate({
        start: { transform: "translateY(200px)" },
        end: { transform: "translateY(0px)" }
      });

    const onSelectedController = (value) => {
        dispatch(select_controller(value, style))
        // console.log(value.Key)
    }

    const toggleActive = (index) => {
        setInd(false)
        setSelected(
            {
                ...selected,
                activeObj: selected.list[index]
            })
    }

    const toggleActiveStyle = (index) => {
        // console.log('checking toggle styles')
        // console.log(selected.list[index])
        // console.log(selected.activeObj)
        if (ind & index === 0) {
            return 'button active'
        } else {
            if (selected.list[index] === selected.activeObj) {
                return 'button active'
            } else {
                return 'button inactive'
            }
        }

    }

    React.useEffect(() => {
        console.log('Componenet loaded')
    }, [])


    return (
        <>
            <div className='controller-base'>
                {
                    controllers.map((c) => {
                        return (
                            <div className="button-container " key={c.Key}>
                                <button className={toggleActiveStyle(c.Key)} onClick={() => {play(!isPlaying), onSelectedController(c), toggleActive(c.Key) }}> {c.Name}</button>
                            </div>
                            // style this button with styled components

                        )
                    })
                }
            </div>
        </>

    )

}


export default Controller

