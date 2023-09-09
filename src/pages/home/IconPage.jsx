import React, { useState, useRef, useEffect }  from 'react';
import BrandIconCard from '../../component/BrandIconCard';
import ClassicIconCard from '../../component/ClassicIconCard';
import FreeIconCard from '../../component/FreeIconCard';
import { GiClassicalKnowledge , GiSwordBrandish } from "react-icons/gi";
import { AiFillThunderbolt , AiOutlineCrown } from "react-icons/ai";
import { LuLayoutList } from "react-icons/lu";
import { BsColumnsGap } from "react-icons/bs";
import ProIconCard from '../../component/ProIconCard';


const IconPage = () => {

    const [brand, setBrand] = useState([])

    useEffect(()=>{
        fetch("https://fontawesome-server.vercel.app/brandIcon")
        .then((res) => res.json())
        .then((data)=> setBrand(data))
    },[]);

    const [classic, setClassic] = useState([])

    useEffect(()=>{
        fetch("https://fontawesome-server.vercel.app/classicIcon")
        .then((res) => res.json())
        .then((data)=> setClassic(data))
    },[]);

    const [free, setFree] = useState([])

    useEffect(()=>{
        fetch("https://fontawesome-server.vercel.app/freeIcon")
        .then((res) => res.json())
        .then((data)=> setFree(data))
    },[]);
    const [pro, setPro] = useState([])

    useEffect(()=>{
        fetch("https://fontawesome-server.vercel.app/proIcon")
        .then((res) => res.json())
        .then((data)=> setPro(data))
    },[]);
    const [tabSelected, setTabSelected] = useState({
        currentTab: 1,
        noTabs: 4,
      })
    
      const wrapperRef = useRef(null)
    
      const handleKeyDown = e => {
        if (e.keyCode === 39) {
          if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
            if (
              tabSelected.currentTab >= 1 &&
              tabSelected.currentTab < tabSelected.noTabs
            ) {
              setTabSelected({
                ...tabSelected,
                currentTab: tabSelected.currentTab + 1,
              })
            } else {
              setTabSelected({
                ...tabSelected,
                currentTab: 1,
              })
            }
          }
        }
    
        if (e.keyCode === 37) {
          if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
            if (
              tabSelected.currentTab > 1 &&
              tabSelected.currentTab <= tabSelected.noTabs
            ) {
              setTabSelected({
                ...tabSelected,
                currentTab: tabSelected.currentTab - 1,
              })
            } else {
              setTabSelected({
                ...tabSelected,
                currentTab: tabSelected.noTabs,
              })
            }
          }
        }
      }
    
      useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => {
          window.removeEventListener("keydown", handleKeyDown)
        }
      })


      const [isShowing, setIsShowing] = useState(false)

    
    
      useEffect(() => {
        function handleClickOutside(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsShowing(false)
          }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
          document.removeEventListener("mousedown", handleClickOutside)
        }
      }, [wrapperRef])
    
      useEffect(() => {
        let html = document.querySelector("html")
    
        if (html) {
          if (isShowing && html) {
            html.style.overflowY = "hidden"
    
            const focusableElements =
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    
            const modal = document.querySelector("#modal") // select the modal by it's id
    
            const firstFocusableElement =
              modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
    
            const focusableContent = modal.querySelectorAll(focusableElements)
    
            const lastFocusableElement =
              focusableContent[focusableContent.length - 1] // get last element to be focused inside modal
    
            document.addEventListener("keydown", function (e) {
              if (e.keyCode === 27) {
                setIsShowing(false)
              }
    
              let isTabPressed = e.key === "Tab" || e.keyCode === 9
    
              if (!isTabPressed) {
                return
              }
    
              if (e.shiftKey) {
                // if shift key pressed for shift + tab combination
                if (document.activeElement === firstFocusableElement) {
                  lastFocusableElement.focus() // add focus for the last focusable element
                  e.preventDefault()
                }
              } else {
                // if tab key is pressed
                if (document.activeElement === lastFocusableElement) {
                  // if focused has reached to last focusable element then focus first focusable element after pressing tab
                  firstFocusableElement.focus() // add focus for the first focusable element
                  e.preventDefault()
                }
              }
            })
    
            firstFocusableElement.focus()
          } else {
            html.style.overflowY = "visible"
          }
        }
      }, [isShowing])


      const [foreColumn,setForeColumn] = useState(true)
      

      const handleAddForeColumn =()=>{
        setForeColumn(true)
      }
      const handleRemoveForeColumn =()=>{
        setForeColumn(false)
      }

      

    return (
    <>
            <div className='flex justify-center mt-7'>
            <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                <p className="text-2xl font-semibold tracking-widest text-white uppercase">Our Icon Section</p>
            </div>
            </div>
<div id='icon' className="mt-5 mb-5">
     {/*<!-- Component: Basic lg sized tab --> */}
    
     <section className="relative w-[70%] mx-auto bg-white" aria-multiselectable="false">
     {/* <div className="absolute rounded-full  lg:w-72 lg:h-72 sm:w-[10%] sm:h-[10%] bg-lime-500 filter blur-xl mix-blend-multiply opacity-75 "></div> */}
        <ul
          className="flex items-center border-b border-slate-200"
          role="tablist"
          ref={wrapperRef}
        >
          <li className="" role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-blue-50 hover:stroke-blue-600 focus:bg-blue-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 1
                  ? "border-blue-500 stroke-blue-500 text-blue-500 hover:border-blue-600  hover:text-blue-600 focus:border-blue-700 focus:stroke-blue-700 focus:text-blue-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-blue-500 hover:text-blue-500 focus:border-blue-600 focus:stroke-blue-600 focus:text-blue-600 disabled:text-slate-500"
              }`}
              id="tab-label-1a"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1a"
              aria-selected={`${
                tabSelected.currentTab === 1 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <GiClassicalKnowledge/>
              <span className='text-lg'>Classic</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-blue-50 hover:stroke-blue-600 focus:bg-blue-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 2
                  ? "border-blue-500 stroke-blue-500 text-blue-500 hover:border-blue-600  hover:text-blue-600 focus:border-blue-700 focus:stroke-blue-700 focus:text-blue-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-blue-500 hover:text-blue-500 focus:border-blue-600 focus:stroke-blue-600 focus:text-blue-600 disabled:text-slate-500"
              }`}
              id="tab-label-2a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <GiSwordBrandish/>
              <span className='text-lg'>Brand</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-blue-50 hover:stroke-blue-600 focus:bg-blue-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 3
                  ? "border-blue-500 stroke-blue-500 text-blue-500 hover:border-blue-600  hover:text-blue-600 focus:border-blue-700 focus:stroke-blue-700 focus:text-blue-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-blue-500 hover:text-blue-500 focus:border-blue-600 focus:stroke-blue-600 focus:text-blue-600 disabled:text-slate-500"
              }`}
              id="tab-label-3a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 3 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <AiFillThunderbolt/>
              <span className='text-lg'>Free</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-blue-50 hover:stroke-blue-600 focus:bg-blue-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 4
                  ? "border-blue-500 stroke-blue-500 text-blue-500 hover:border-blue-600  hover:text-blue-600 focus:border-blue-700 focus:stroke-blue-700 focus:text-blue-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-blue-500 hover:text-blue-500 focus:border-blue-600 focus:stroke-blue-600 focus:text-blue-600 disabled:text-slate-500"
              }`}
              id="tab-label-4a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 4 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 4 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 4 })}
            >
              
              <span className="  inline-flex items-center justify-center gap-1 rounded bg-blue-500 px-1.5 text-white"/>
                        <AiOutlineCrown className='text-yellow-500' /> <span className='text-sm'>PRO</span>
  
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className='-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-blue-50 hover:stroke-blue-600 focus:bg-blue-50 focus-visible:outline-none disabled:cursor-not-allowed '
              
              onClick={() => handleAddForeColumn(true)}
            >
              <BsColumnsGap/>
              <span className='text-lg'>4 Column</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className='-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-blue-50 hover:stroke-blue-600 focus:bg-blue-50 focus-visible:outline-none disabled:cursor-not-allowed '
              
              onClick={() => handleRemoveForeColumn(false)}
            >
              <LuLayoutList/>
              <span className='text-lg'>2 Column</span>
            </button>
          </li>
          
        </ul>
        <div className="">
          

          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3a"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabindex="-1"
          >
            <div className={`grid gap-10 ${foreColumn ? 'grid-cols-4' : 'grid-cols-2' }
        `}>

        {
            free?.map(freeIcon=> <FreeIconCard
            key={freeIcon._id}
            freeIcon={freeIcon}
            /> )
        }
        
        </div>
           
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-2a"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2a"
            tabindex="-1"
          >
            <div className={`grid gap-10 ${foreColumn ? 'grid-cols-4' : 'grid-cols-2' }
        `}>
        {
            brand?.map(brandIcon=> <BrandIconCard 
            key={brandIcon._id}
            brandIcon={brandIcon}
            /> )
        }
        </div>
          </div>


          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1a"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1a"
            tabindex="-1"
          >
         <div className={`grid gap-10 ${foreColumn ? 'grid-cols-4' : 'grid-cols-2' }
        `}>
            {
            classic?.map(classicIcon=> <ClassicIconCard 
            key={classicIcon._id}
            classicIcon={classicIcon}
            /> )
        }
        </div>
          </div>


          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 4 ? "" : "hidden"
            }`}
            id="tab-panel-4a"
            aria-hidden={`${tabSelected.currentTab === 4 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-4a"
            tabindex="-1"
          >
         <div className={`grid gap-10 ${foreColumn ? 'grid-cols-4' : 'grid-cols-2' }
        `}>
            {
            pro?.map(proIcon=> <ProIconCard
            key={proIcon._id}
            proIcon={proIcon}
            /> )
        }
        </div>
          </div>







        </div>
      </section>
      {/*<!-- End Basic lg sized tab --> */}  
      </div>     
    </>
    );
};

export default IconPage;