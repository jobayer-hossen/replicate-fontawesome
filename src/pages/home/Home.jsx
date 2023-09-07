import React from 'react';

const Home = () => {
    return (
    <>
      <div className="container px-6 py-16 mx-auto text-center  ">
        <div className="bg-[url('https://img.fortawesome.com/1ce05b4b/hero-icon-bg.svg')]">
        <div className="max-w-lg mx-auto bg-white">
            <h1 className="text-5xl font-semibold lg:text-4xl bg-gradient-to-r from-teal-600 via-purple-600 to-green-600 text-transparent bg-clip-text animate-gradient">Take the hassle out of icons in your <span className='text-6xl'>website.</span> </h1>
            <p className="mt-6 ">Font Awesome is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators.</p>
            <div className='flex justify-around'>
            <button className="px-5 py-2 mt-6 text-sm rounded-lg font-medium leading-5 text-center text-black capitalize border-2 border-r-0 border-slate-950 border-b-4 border-t-0 lg:mx-0 lg:w-auto focus:outline-none">
            Start for Free
            </button>
            <button className="px-5 py-2 rounded-lg mt-6 text-sm font-medium leading-5 text-center lg:mx-0 lg:w-auto focus:outline-none text-black capitalize border-2 border-slate-950 border-b-4 border-s-0 border-t-0">
                Get More with Pro
            </button>
            </div>
        </div>

        <div className="flex justify-center mt-10">
            <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
        </div>
        </div>
    </div>      
    </>
    );
};

export default Home;