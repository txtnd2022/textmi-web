import React from 'react'
import Image from 'next/image'
import Pic_1 from '../../../public/assets/tripura.svg'
import Pic_2 from '../../../public/assets/nascom.svg'
import Pic_3 from '../../../public/assets/nascom2.svg'
import Pic_4 from '../../../public/assets/dit.svg'
import Pic_5 from '../../../public/assets/dtu.png'
import Pic_6 from '../../../public/assets/meity.png'
import Pic_7 from '../../../public/assets/dtvl.jpg'

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
        },
        // {
        //     'id': 4,
        //     'Pic': Pic_5, 
        // },
        // {
        //     'id': 5,
        //     'Pic': Pic_6, 
        // },
        // {
        //     'id': 6,
        //     'Pic': Pic_7, 
        // }
    ]
    const SUPPORT_BANNERS2 = [
        // {
        //     'id': 0,
        //     'Pic': Pic_4
        // },
        // {
        //     'id': 1,
        //     'Pic': Pic_2
        // },
        // {
        //     'id': 2,
        //     'Pic': Pic_3
        // },
        // {
        //     'id': 3,
        //     'Pic': Pic_1, 
        // },
        {
            'id': 4,
            'Pic': Pic_5, 
        },
        {
            'id': 5,
            'Pic': Pic_6, 
        },
        {
            'id': 6,
            'Pic': Pic_7, 
        }
    ]

    return (
        <div className='supported-by'>
            <div className="header">
                <h3 className='text-l'>We are supported by</h3>
            </div>
            <div className="support-container">
                {
                    SUPPORT_BANNERS.map((c) => {
                        return (
                            <div key={c.id} className="each-banner">
                                <Image width={500} height={450} src={c.Pic} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="support-container">
                {
                    SUPPORT_BANNERS2.map((c) => {
                        return (
                            <div key={c.id} className="each-banner">
                                <Image width={195} height={180} src={c.Pic} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Div3
