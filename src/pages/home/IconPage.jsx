import React, { useState, useRef, useEffect }  from 'react';
import ReactDOM from "react-dom"
import { FaFontAwesomeFlag } from "react-icons/fa";
import BrandIconCard from '../../component/BrandIconCard';

const IconPage = () => {

    const [brand, setBrand] = useState([])

    useEffect(() => {
        fetch("/brand.json")
          .then((res) => res.json())
          .then((data) => setBrand(data));
      }, []);

    const [tabSelected, setTabSelected] = useState({
        currentTab: 1,
        noTabs: 3,
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


    return (
    <>

     {/*<!-- Component: Basic lg sized tab --> */}
      <section className="w-[70%] mx-auto" aria-multiselectable="false">
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
              <span>Classic</span>
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
              <span>Brand</span>
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
              <span>Free</span>
            </button>
          </li>
        </ul>
        <div className="">
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
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 '>
        {
            brand.map(brandIcon=> <BrandIconCard 
            key={brandIcon.id}
            brandIcon={brandIcon}
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
            <p>
              One must be entirely sensitive to the structure of the material
              that one is handling. One must yield to it in tiny details of
              execution, perhaps the handling of the surface or grain, and one
              must master it as a whole.
              {<FaFontAwesomeFlag/>}
            </p>
          </div>
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
            <p>
              Even though there is no certainty that the expected results of our
              work will manifest, we have to remain committed to our work and
              duties; because, even if the results are slated to arrive, they
              cannot do so without the performance of work.
            </p>
          </div>
        </div>
      </section>
      {/*<!-- End Basic lg sized tab --> */}       
    </>
    );
};

export default IconPage;