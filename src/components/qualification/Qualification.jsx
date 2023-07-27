import React, { useState } from 'react';
import "./qualification.css";


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section" id='quali'>
            <h2 className="section__title"> Qualification
            </h2>
            <span className="section__subtitle">My Education journey
            </span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>

                    <div
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                        onClick={() => toggleTab(2)}

                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>


                </div>

                <div className="qualification__sections">
                    <div
                        className={toggleState === 1
                            ? "qualification__content qualification__content-active" : "qualification__content"}
                            >

                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>Integrated M.Tech</h3>
                                <span className='qualification__subtitle'>VIT Bhopal Univeresity  </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>{' '}
                                    2020-2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>H.S. School</h3>
                                <span className='qualification__subtitle'>Govt. Exe. H.S School, Chhapara <br/> 96.4%</span>
                                
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>
                                    2019-2020
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>High School</h3>
                                <span className='qualification__subtitle'>Govt. Exe. H.S.School, Chhapara<br/> 91.4% </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>
                                    2017-2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>

                    
                    </div>

                    <div className= {toggleState===2 ? "qualification__content qualification__content-active":"qualification__content"}
                    >

                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>Technical Content Writer Internship</h3>
                                <span className='qualification__subtitle'>GeeksforGeeks</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>
                                    2022-2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div> </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                           
                            <div>
                                <h3 className='qualification__title'>NSS Unit Memeber</h3>
                                <span className='qualification__subtitle'>VIT Bhopal University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>
                                    2020-Present
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>Information Security Administrator</h3>
                                <span className='qualification__subtitle'>Virtually Testing Foundation</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender"></i>
                                    Se-23 Nov-23
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                </span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>


                    </div >
                </div>

            </div>

        </section>
    )
}

export default Qualification