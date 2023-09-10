import React from 'react';
import color from './about.module.css'


export default function About(){
    return <>
    <div className={`${color.color}  text-center p-5`}>
        <div className="container-fluid">
            <div className="row pt-5">
                <div className=" col-md-12">
                    <div className=' pt-3 text-white'>
                        <h1>ABOUT COMPONENT</h1>
                        <div className="d-flex align-items-center justify-content-center mb-2">
                            <div className={`${color.dd} border bg-white`}></div>
                            <div className=' fa-solid fa-star m-3'></div>
                            <div className={`${color.dd} border bg-white`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-md-6">
                    <div className=' w-75 ms-auto text-white '>
                        <p className=''>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className=' w-75 text-white me-auto'>
                        <p className=''>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
}
