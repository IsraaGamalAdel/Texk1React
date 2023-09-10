import React from 'react';
import csscontact from './contact.module.css'


export default function Contact(){
    return <>
        <div className=' p-5 text-center '>
            <div className=' container'>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h1>CONATCT SECTION</h1>
                                <div className="d-flex align-items-center justify-content-center mb-2">
                                    <div className={`${csscontact.bgcolor} border bg-dark`}></div>
                                    <div className=' fa-solid fa-star m-3'></div>
                                    <div className={`${csscontact.bgcolor} border bg-dark`}></div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div>
                        <form novalidate="" action="" className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched">
                            
                            <label  htmlFor="userName" className="position-relative top-0 __top"></label>
                            <input  id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
                    
                            <label htmlFor="userAge" class="position-relative top-0 __top"></label>
                            <input id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
                    
                            <label htmlFor="userEmail" class="position-relative top-0 __top"></label>
                            <input id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
                        
                            <label htmlFor="userPassword" class="position-relative top-0 __top"></label>
                            <input id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
                            
                            <button className={`${csscontact.bggcolor} btn mt-4 text-white`}> send Message </button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
