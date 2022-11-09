import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-contents">
                    {/* <p>
                        <> Illustration by < a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6" > Icons 8</a > from < a href="https://icons8.com/illustrations" > Ouch!</a > x</>
                    </p> */}
                    
                    <div className='links'>
                    <p> <Link href={'/termsofuse'} > FAQ</Link></p>
                        <p> <Link href={'/termsofuse'} > Terms of Use </Link></p>
                        <p><Link href={'/privacypolicy'} > Privacy Policy </Link></p>
                </div>
                <div style={{height: 20}}></div>
                <p>Copyright reserved by Interesting Technologies Private Limited, India.</p>
                
            </div>
        </div>
        </>
    )
}

export default Footer
