import React from 'react'
import { FaFacebookF} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaLinkedinIn} from "react-icons/fa";
import {FaPinterestP} from "react-icons/fa";
import { FaGooglePlusG} from "react-icons/fa";
const Footer = () => {
    return (
        <>
        <div className='footer '>
            <div className='col-9 mx-auto footer1'>
                <div>
                    <h5>Our Contact</h5>
                    <p>Bootstrap compant Inc</p>
                    <p>JC Main Road,Near Siline Tower</p>
                    <p>Pin-21432 NewYork US.</p>
                    <p>(123)456-387-233</p>
                    <p>email@domainname.com</p>
                </div>
                <div>
                    <h5>Quick Links</h5>
                    <p>Latest Event</p>
                    <p>Terms and condition</p>
                    <p>Privacy policy</p>
                    <p>Career</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h5>Latest post</h5>
                    <p>Lorem Ipsum is simply dummy
                    </p>
                    <p>text of the printing and typesetting industryr</p>
                    <p> Lorem Ipsum has been the industry's.</p>
                    <p>standard dummy text </p>
                    <p>ever since the 1500s.</p>
                </div>
                <div>
                    <h5>Latest post</h5>
                    <p>Lorem Ipsum is simply dummy
                    </p>
                    <p>text of the printing and typesetting industryr</p>
                    <p> Lorem Ipsum has been the industry's.</p>
                    <p>standard dummy text </p>
                    <p>ever since the 1500s.</p>
                </div>
            </div>
        </div>
        <div className='footer_second '>
            <div className='footer_second1'>
                <p>Bootstrap Template 2018 All right reserved. Temlate by <sapn>WebThemez</sapn> </p>
            </div>
            <div className='footer_second2'>
                <div><FaFacebookF/></div>
                <div><FaTwitter/></div>
                <div><FaLinkedinIn/></div>
                <div><FaPinterestP/></div>
                <div><FaGooglePlusG/></div>
            </div>
        </div>
        </>
    )
}

export default Footer;