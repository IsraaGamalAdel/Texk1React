import React from 'react';
import cssPort from './PortFolio.module.css'
import imge from './poert1.png'
import imger from './port2.png'
import imgerr from './port3.png'


export default function PortFolio(){
    return <>
        <div className=' p-5 text-center '>
            <div className=' container'>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h1>PORTFOLIO COMPONENT</h1>
                                <div className="d-flex align-items-center justify-content-center mb-2">
                                    <div className={`${cssPort.bgcolor} border bg-dark`}></div>
                                    <div className=' fa-solid fa-star m-3'></div>
                                    <div className={`${cssPort.bgcolor} border bg-dark`}></div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="row gy-4">
                    <div className="col-md-4 ">
                        <div className=' position-relative '>
                            <img src={imge} className=' w-100 rounded-3 ' />
                            <div className={`${cssPort.layer} layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                <i className=" text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className=' position-relative '>
                            <img src={imger} className=' w-100 rounded-3 ' />
                            <div className={`${cssPort.layer} layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                <i className=" text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className=' position-relative '>
                            <img src={imgerr} className=' w-100 rounded-3 ' />
                            <div className={`${cssPort.layer} layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                <i className=" text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className=' position-relative '>
                            <img src={imge} className=' w-100 rounded-3 ' />
                            <div className={`${cssPort.layer} layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                <i className=" text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className=' position-relative '>
                            <img src={imger} className=' w-100 rounded-3 ' />
                            <div className={`${cssPort.layer} layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                <i className=" text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className=' position-relative '>
                            <img src={imgerr} className=' w-100 rounded-3 ' />
                            <div className={`${cssPort.layer} layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                                <i className=" text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
