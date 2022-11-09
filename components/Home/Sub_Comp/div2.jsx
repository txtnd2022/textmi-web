import React from 'react'
import Image from 'next/image'
import { FEATURES_CONTROLLER } from '../features_controller'

function Div2() {

    const [state, setState] = React.useState(0)

    const prev = () => {
        if (state == 0) {
            setState(2)
        } else {
            setState(state - 1)
        }
    }

    const next = () => {
        setState(state + 1)
        if (state > 1) {
            setState(0)
        }
    }

    return (
        <div className='section-2 '>
            <div className="header">
                <h3 className='text-l'>Key Features</h3>
            </div>
            <div className='inside-body-section-2'>
                <div className="left-div-section-2">
                    {/* <div className="globe"></div> */}
                    <div className="globe-container">
                        {
                            FEATURES_CONTROLLER.map((c, id) => {
                                return (
                                    id === state ?
                                        <Image className='key-features-img' key={id} src={c.Image_Src} height={530} width={300} loading="eager" alt={`key-features-img` + id} />
                                        : <div></div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right-div-section-2">
                    {
                        FEATURES_CONTROLLER.map((c, id) => {
                            return (
                                id === state ?
                                    <div key={id} className='peer-info'>
                                        <h2 className={c.custome_header} > {c.Name} </h2>
                                        <p> {c.Body} </p>
                                    </div>
                                    : <> </>
                            )
                        })
                    }
                    <div className="nav_peer">
                        <button onClick={() => prev()}> {'<'} </button>
                        <button onClick={() => next()}> {'>'}  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Div2
