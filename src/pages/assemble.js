import React from 'react'
import Design2 from '../components/design2'
import { useState, useEffect } from 'react'
import deskmodels from '_data/deskcoord.json';
import DeskMenu from '@/components/DeskMenu';
import ModelMenu from '@/components/ModelMenu';
import Link from 'next/link';
import * as Icon from 'react-bootstrap-icons'

const assemble = () => {
  const [maintable, setMainTable] = useState("desk3");
  const [othermodels, setSecondaryModel] = useState([{"name": "keyboard2", "count": 0}, {"name": "monitor2", "count": 1}, {"name": "mouse2", "count": 2}, {"name": "pc2", "count": 3}, {"name": "legobatman", "count": 4}, {"name": "tablelamp1", "count": 5}, {"name": "ipad_air", "count": 6}]);
  const [cameraposition, setCamera] = useState([0, 2.9, 4.6]);
  const [tablebuffer, setTableBuffer] = useState(deskmodels[maintable].y_buffer);
  const [newOtherModels, setNewOtherModels] = useState([]);
  const [keepModelCount, setModelCount] = useState(7);

  const changeTable = (event, newTable) => {
    event.preventDefault();
    setMainTable(newTable);
    setTableBuffer(deskmodels[newTable].y_buffer);
  };

  const appendNewModel = (event, modelName) => {
    event.preventDefault();
    setNewOtherModels([...newOtherModels, {"name": modelName, "count": keepModelCount}]);
    setModelCount(keepModelCount + 1);
  }

  const removeModel = (modelName, modelCount) => {
    setSecondaryModel(othermodels.filter((e) => (e.name != modelName && e.count != modelCount)));
  }
  
  const removeOtherModel = (modelName, modelCount) => {
    setNewOtherModels(newOtherModels.filter((e) => (e.name != modelName && e.count != modelCount)));
  }

  const resetTableConfig = (event) => {
    event.preventDefault();
    setSecondaryModel([
      {"name": "keyboard2", "count": 0}, 
      {"name": "monitor2", "count": 1}, 
      {"name": "mouse2", "count": 2}, 
      {"name": "pc2", "count": 3}, 
      {"name": "legobatman", "count": 4}, 
      {"name": "tablelamp1", "count": 5}, 
      {"name": "ipad_air", "count": 6}]);
    setNewOtherModels([]);
    setMainTable("desk3");
    setTableBuffer(deskmodels["desk3"].y_buffer);
    setCamera([0, 2.9, 4.6]);
  }

  return (
    <div>
      <nav className="backdrop-filter backdrop-blur-lg bg-opacity-90 fixed w-full z-20 top-0 left-0 border-b border-gray-800 dark:border-gray-800">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
              <a href="https://deskgenius.vercel.app/" className="flex items-center">
                <img src="/companyLogo/deskgeniusLogo.png" className="h-8 mr-3" alt="Deskgenius Logo" quality={100}/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DeskGenius</span>
              </a>
              <div className="flex md:order-2">
                  <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={(e) => resetTableConfig(e)}>Reset Room</button>
                  <Link href="https://github.com/thisisadityapatel/deskgenius" target="_blank" className="mx-4 pt-3 text-gray-200 hover:text-gray-500"><Icon.Github size={21}/></Link>
                  <Link href="https://www.linkedin.com/in/thisisadityapatel/" className="mx-1 pt-3 text-gray-200 hover:text-gray-500"><Icon.Linkedin size={20}/></Link>
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 font-normal" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 text-gray-500">
                  <li>
                      <Link href="./" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                  </li>
                  <li>
                      <Link href="./credits" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notes</Link>
                  </li>
                  <li>
                      <Link href="" data-modal-target="tutorialModal" data-modal-toggle="tutorialModal" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tutorial</Link>
                  </li>
              </ul>
              </div>
          </div>
      </nav>
      <Design2 maintable={maintable} othermodels={othermodels} newOtherModels={newOtherModels} cameraposition={cameraposition} tablebuffer={tablebuffer} removeModel={removeModel} removeOtherModel={removeOtherModel}/>
      <div className="absoluteSideMenu my-20 m-8">
        <div>
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-tables-heading">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-tables-body" aria-expanded="true" aria-controls="accordion-tables-body">
                <span>Desks</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-tables-body" className="hidden" aria-labelledby="accordion-tables-heading">
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <div className="mb-2 text-gray-500 dark:text-gray-400">
                  <DeskMenu modelName={"desk3"} changeTable={changeTable}/>
                  <DeskMenu modelName={"desk2"} changeTable={changeTable}/>
                  <DeskMenu modelName={"desk1"} changeTable={changeTable}/>
                </div>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-2">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span>Monitors</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <div className="mb-2 text-gray-500 dark:text-gray-400">    
                  <ModelMenu modelName={"monitor1"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"monitor2"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"monitor4"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"monitor3"} addNewModel={appendNewModel}/>
                </div>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-3">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>Keyboards</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <div className="mb-2 text-gray-500 dark:text-gray-400">  
                  <ModelMenu modelName={"keyboard2"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"keyboard3"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"keyboard1"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"keyboard4"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"keyboard5"} addNewModel={appendNewModel}/>
                </div>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-5">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
                <span>PCs</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <div className="mb-2 text-gray-500 dark:text-gray-400">    
                  <ModelMenu modelName={"pc2"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"pc1"} addNewModel={appendNewModel}/>
                </div>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-7">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-7" aria-expanded="false" aria-controls="accordion-collapse-body-7">
                <span>Laptops</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-7" className="hidden" aria-labelledby="accordion-collapse-heading-7">
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <div className="mb-2 text-gray-500 dark:text-gray-400">    
                  <ModelMenu modelName={"macbook_pro_16_2021"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"ipad_air"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"asus_rog_g15"} addNewModel={appendNewModel}/>
                </div>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-4">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                <span>Mouses</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
              <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <div className="mb-2 text-gray-500 dark:text-gray-400">    
                  <ModelMenu modelName={"mouse1"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"mouse2"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"mouse3"} addNewModel={appendNewModel}/>
                </div>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-6">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
                <span>Misc.</span>
                <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <div className="mb-2 text-gray-500 dark:text-gray-400">    
                  <ModelMenu modelName={"legobatman"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"tablelamp1"} addNewModel={appendNewModel}/>
                  <ModelMenu modelName={"tablemic1"} addNewModel={appendNewModel}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="tutorialModal" data-modal-backdrop="static" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex" aria-modal="true" role="dialog">
          <div className="relative w-full max-w-lg max-h-full">
            <div className="relative modalBlurrBackground rounded-lg shadow">
                <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Quick Tutorial
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="tutorialModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span> 
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      <p className="text-1xl text-white">Precision Position Movements</p>
                      <p className="text-1xl text-gray-400 flex justify-left">
                        x-axis movements: ➡ and ⬅ keys
                      </p>
                      <p className="text-1xl text-gray-400 flex justify-left">
                        z-axis movements: ⬆ and ⬇ keys
                      </p>
                      <p className="text-1xl text-gray-400 flex justify-left">
                        y-axis movements: <span className="font-black text-gray-900 text-white px-1">W</span> and <span className="font-black text-gray-900 text-white px-1">S</span> keys
                      </p>
                    </div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      <p className="text-1xl text-white">Rotation Movements</p>
                      <p className="text-1xl text-gray-400 flex justify-left">
                        Left and Right rotation: <span className="font-black text-gray-900 text-white px-1">A</span> and <span className="font-black text-gray-900 text-white px-1">D</span> keys
                      </p>
                    </div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      <p className="text-1xl text-white">Remove Model</p>
                      <p className="text-1xl text-gray-400 flex justify-left">
                        Remove model from canvas using <span className="font-black text-gray-900 text-white px-1">X</span> key
                      </p>
                    </div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      <p className="text-1xl text-white">Zoom In & Out</p>
                      <p className="text-1xl text-gray-400 flex justify-left">
                        Slide <span className="font-black text-gray-900 text-white px-1">UP</span> using two fingers to zoom out and <span className="font-black text-gray-900 text-white px-1">DOWN</span> to zoom in
                      </p>
                    </div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      <p className="text-1xl text-white">Change Camera Position</p>
                      <p className="text-1xl text-gray-400 flex justify-left">
                        Click & slide using two fingers to the change camera position
                      </p>
                    </div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      <p className="text-1xl text-white">Select Model</p>
                      <p className="text-1xl text-gray-400 flex justify-left">
                        Click on the model to select.
                      </p>
                    </div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      <p className="text-1xl text-white">Reset Room</p>
                      <p className="text-1xl text-gray-400">
                        To reset the canvas to the original config. click <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 px-1">Reset Room</button> button at the navigation bar.
                      </p>
                    </div>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="tutorialModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default assemble
