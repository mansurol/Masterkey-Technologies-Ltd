import React from 'react';
import './SliderSection.css'
import Slideraimg1 from '../Img/Ad3.jpg'
import Slideraimg2 from '../Img/Ad2.jpg'
import LeftArrow from '../Img/Leftarrow.png'
import RightArrow from '../Img/Rightarrow.png'
const SliderSection = () => {
    return (
        <div className='bgColor4'>
            <div className='container'>
                <div>
                    <h2 className='text-center pt-5'>SLIDER</h2>
                </div>
                <div className='d-flex'>
                    <div className='SliderStyleBox mt-5 mb-5 '>
                        <div className='SliderStyleBox2 d-flex' >
                            <img src={Slideraimg1} alt="" />
                            <div className='SliderContent'>
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit cupiditate possimus repellat dolorem ad libero!</p>
                            </div>


                        </div>

                    </div>

                    <div className='SliderStyleBox mt-5 mb-5  lineGap'>
                        <div className='SliderStyleBox2 d-flex'>
                            <img src={Slideraimg2} alt="" />
                            <div className='SliderContent'>
                            <h2>Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit cupiditate possimus repellat dolorem ad libero!</p>
                            </div>
                        </div>
                  </div>

                </div>

                <div>
                    <div className='d-flex justify-content-center pb-3'>
                        <div className='ArrowBox '>
                            <img src={LeftArrow} alt="" />
                        </div>

                        <div className='ArrowBox'>
                            <img src={RightArrow} alt="" />
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SliderSection;