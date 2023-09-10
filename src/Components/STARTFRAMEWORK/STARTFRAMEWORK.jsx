import React from 'react';
import img from './avataaars.svg'
import css from './startframework.module.css'

export default function STARTFRAMEWORK(){
    return <>
            <div className={`${css.bgb}  text-center p-5`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className=" col-md-12">
                            <div className=' w-100'>
                                <img src={img}  className='w-25' />
                            </div>
                            <div className=' pt-3 text-white'>
                                <h1>START FRAMEWORK</h1>
                                <div className="d-flex align-items-center justify-content-center mb-2">
                                    <div className={`${css.d} border bg-white`}></div>
                                    <div className=' fa-solid fa-star m-3'></div>
                                    <div className={`${css.d} border bg-white`}></div>
                                </div>
                                <h6 className=' pt-2'>Graphic Artist - Web Designer - Illustrator</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
}
