import React from "react";
import Image from "next/image";

import Logo from "../../public/assets/logoTxt.png";
// import { WindowTwoTone } from '@mui/icons-material'

function Navbar() {
  return (
    <div className="nav-section-1">
      <div className="nav-title">
        <Image src={Logo} height={40} width={40} />
        {/* <div style={{width: 20}}></div> */}
        {/* <h3 style={{}}>Txtend is now</h3> */}
        <h1 className="nav-title-text">Textmi</h1>
      </div>
      <div className="nav-menu-1">
        {/* <Link href={www.facebook.com}/> */}

        <p className="text-ll" href="https://www.linkedin.com/company/textmi">
          Features
        </p>
        <p
          className="text-ll"
          href="https://twitter.com/Textmi_India?t=d-PI-vdsyObJOCMv6IoI5A&s=08"
        >
          Security
        </p>
        <p className="text-ll" href="https://www.instagram.com/textmi_india">
          Mission
        </p>

        <p className="text-ll">Dowloads</p>
        <p className="text-ll" href="https://facebook.com/txtend">
          Help
        </p>
        {/* <p className='text-l'>Instagram</p>
                <p className='text-l'>Linkedn</p>
                <p className='text-l'>Twitter</p> */}
      </div>
    </div>
  );
}

export default Navbar;

//
{
  /* <a href="https://icons8.com/icon/W0xu6u7K9A0F/search">Search icon by Icons8</a> */
}
