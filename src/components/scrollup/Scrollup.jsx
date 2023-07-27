import React from 'react'
import "./scrollup.css";


const Scrollup = () => {
    window.addEventListener("scroll", function (){
        var scrollUp = document.querySelector(".scrollup");
        //when the scroll is higher than 500 viewpoint height, add the show-scroll class to a tag with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className='scrollup'>
        <i className="uil uil-arrow-up scrollup__icon show-scroll"></i>
    </a>
  )
}

export default Scrollup