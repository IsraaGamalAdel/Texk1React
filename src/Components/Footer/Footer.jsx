import React from 'react';
import csss from './footer.module.css'


export default function Footer(){
    return <>
    <div className={`${csss.bgg} text-white`}>
        <div class="container">
            <div className="row  py-5">
                <div className="col-md-4">
                    <div>
                        <h2 className='text-center'>LOCATION</h2>
                        <h6 className='text-center'>2215 John Daniel Drive</h6>
                        <h6 className='text-center'>Clark, MO 65243</h6>
                    </div>
                </div>

                <div className="col-md-4">
                    <div>
                        <h2 className='text-center'>AROUND THE WEB</h2>
                        <div className="icons text-center pt-3">
                            <i className="fa-brands fa-facebook mx-2  border rounded-circle p-2"></i>
                            <i className="fa-brands fa-twitter mx-2  border rounded-circle p-2"></i>
                            <i className="fa-brands fa-linkedin-in mx-2 border rounded-circle p-2"></i>
                            <i className="fa-solid fa-globe mx-2 border rounded-circle p-2"></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className=' ps-5'>
                        <h2 className='text-center'>ABOUT FREELANCER</h2>
                        <h6 className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${csss.bg}`}>
            <div className="container">
                <div className="row">
                    <div className="cal-me-12 p-3">
                        <div> 
                            <h4 className='text-center'>Copyright © Your Website 2021</h4>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </>
}
