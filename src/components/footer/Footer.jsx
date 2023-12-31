import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
{/* 
                <ul className='footer__list'>
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className='footer__link'>Testimonials</a>
                    </li>

                </ul> */}
                <div className="footer__social">
                    <a href =" " className='footer__social-link' target='_blank'>
                        <i class="uil uil-linkedin"></i>
                    </a>

                    <a href =" " className='footer__social-link' target='_blank'>
                        <i class="uil uil-twitter"></i>
                    </a>
                    <a href=" " className='footer__social-link' target='_blank'>
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
                <span className='footer__copy'>	2022 &copy; Sourabh || All rigths reserved!</span>

            </div>
        </footer>
    )
}

export default Footer