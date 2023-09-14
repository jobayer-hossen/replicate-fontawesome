import React, { useState } from 'react';
import { FaDownload } from "react-icons/fa";
import { ImEnlarge } from "react-icons/im";
import { MdZoomInMap } from "react-icons/md";

const FreeIconCard = ({freeIcon}) => {
    const { iconLink, iconName, _id } = freeIcon;

    const [state, setState] = useState(false);

    const handleClickOpen = () => {
        setState(true);
    };
    const handleClose = () => {
        setState(false);
    };


    const [large, setLarge] = useState(false)

    const handleAddLarge =()=>{
        setLarge(true)
    }
    const handleRemoveLarge =()=>{
        setLarge(false)
    }

    const download = e => {
        e.preventDefault();
        fetch(e.target.href, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "icon.png"); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <>


<div onClickCapture={() => handleClickOpen(true)} className="  overflow-hidden text-center bg-white rounded-md shadow-md text-slate-500 shadow-slate-200 hover:bg-yellow-300 w-[95%] cursor-pointer transition duration-150 ease-in-out hover:scale-105">
                {/*  <!-- Icon --> */}
                <figure className="p-8 pb-0">
                    <img className='w-[40%] mx-auto' src={iconLink} alt="" />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-4">
                    <h3 className="mb-4 font-medium text-slate-700">{iconName}</h3>
                </div>
            </div>

            {/*  */}

            {state ? (
                <div className="fixed inset-0 z-10  ">
                    <div className="fixed inset-0 w-full h-full " ></div>

                    <div className="flex  items-center min-h-screen px-4 py-8 w-[80%] mx-auto">
                        <div className="relative p-4 mx-auto bg-blue-50 rounded-md shadow-lg">

                            <div className="flex justify-between">
                                <h4 className="text-2xl font-semibold text-gray-800">
                                    {iconName}
                                </h4>
                                <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                    onClick={() => handleClose(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className=" py-5 space-y-3 text-center">

                                <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-5 mb-5'>
                                    <div className="w-[70%]  rounded-lg border border-blue-300 mx-auto overflow-hidden p-6 pb-0 text-center bg-white  shadow-md text-slate-500 shadow-slate-200">

                                        <figure className="p-6 pb-0">
                                            <img className={`mx-auto p-4 mb-10 ${large? 'w-[90%]': 'w-[60%]'}`} src={iconLink} alt={iconName} />
                                        </figure>
                                    </div>



                                    <div className="w-[70%]  rounded-lg border border-blue-300 mx-auto overflow-hidden p-6 pb-0 text-center bg-white  shadow-md text-slate-500 shadow-slate-200">
                                        <div className='flex justify-around mt-4'>
                                            <button onClick={handleAddLarge}  className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-blue-50 px-6 text-sm font-medium tracking-wide text-blue-500 shadow-lg shadow-blue-100 transition duration-300 hover:bg-blue-100 hover:text-blue-600 hover:shadow-md hover:shadow-blue-100 focus:bg-blue-200 focus:text-blue-700 focus:shadow-md focus:shadow-blue-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-100 disabled:text-blue-400 disabled:shadow-none">
                                            <span className='flex'> < ImEnlarge className='mt-1 mr-2'/>Large</span>
                                            </button>
                                            <button onClick={handleRemoveLarge} className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-blue-50 px-6 text-sm font-medium tracking-wide text-blue-500 shadow-lg shadow-blue-100 transition duration-300 hover:bg-blue-100 hover:text-blue-600 hover:shadow-md hover:shadow-blue-100 focus:bg-blue-200 focus:text-blue-700 focus:shadow-md focus:shadow-blue-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-100 disabled:text-blue-400 disabled:shadow-none">
                                            <span className='flex'> < MdZoomInMap className='mt-1 mr-2 text-lg'/>Default</span>
                                            </button>
                                        </div>
                                        <div className=''>
                                            <div
                                                className="w-full mt-4 px-2 py-2 text-sm border rounded border-cyan-100 bg-cyan-50 text-cyan-500"
                                                role="alert"
                                            >
                                                <p className='text-lg'>{iconName}  -Icon</p>
                                            </div>

                                            
                                           <button  className="px-5 py-2 rounded-lg mt-6 text-sm font-medium leading-5 text-center lg:mx-0 lg:w-auto focus:outline-none text-black capitalize border-2 border-slate-950 border-b-4 border-s-0 border-t-0 hover:bg-blue-300" >
                                           <a target='_blank' onClick={e => download(e)} href={`${iconLink}`}>
                                           <span className='flex'> <FaDownload className='mt-1 mr-2'/>Download</span>
                                            </a>
                                           </button>

                                        </div>


                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : ''}




        </>
    );
};

export default FreeIconCard;