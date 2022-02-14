import React from 'react'
import Image from 'next/image'
import Pic_1 from '../../../public/assets/tripura.svg'
import Pic_2 from '../../../public/assets/nascom.svg'
import Pic_3 from '../../../public/assets/nascom2.svg'
import Pic_4 from '../../../public/assets/dit.svg'

function Div3() {

    const SUPPORT_BANNERS = [
        {
            'id': 0,
            'Pic': Pic_4
        },
        {
            'id': 1,
            'Pic': Pic_2
        },
        {
            'id': 2,
            'Pic': Pic_3
        },
        {
            'id': 3,
            'Pic': Pic_1, 
        }
    ]

    return (
        <div className='supported-by'>
            <div className="header">
                <h3 className='text-l'>Key Features</h3>
            </div>
            <div className="support-container">
                {
                    SUPPORT_BANNERS.map((c) => {
                        return (
                            <div key={c.id} className="each-banner">
                                <Image src={c.Pic} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Div3
