import React from 'react'
import Design2 from './design2'
import { useState, useEffect } from 'react'
import deskmodels from '_data/deskcoord.json';
import DeskMenu from '@/components/DeskMenu';
import ModelMenu from '@/components/ModelMenu';
import AssembleHeader from '@/components/AssembleHeader';

const assemble = () => {
  const [maintable, setMainTable] = useState("desk3");
  const [othermodels, setSecondaryModel] = useState([{"name": "keyboard2", "count": 0}, {"name": "monitor2", "count": 1}, {"name": "mouse2", "count": 2}, {"name": "pc2", "count": 3}, {"name": "legobatman", "count": 4}, {"name": "tablelamp1", "count": 5}]);
  const [cameraposition, setCamera] = useState([0, 2.9, 4.6]);
  const [tablebuffer, setTableBuffer] = useState(deskmodels[maintable].y_buffer);
  const [newOtherModels, setNewOtherModels] = useState([]);
  const [keepModelCount, setModelCount] = useState(6);

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
    setSecondaryModel([{"name": "keyboard2", "count": 0}, {"name": "monitor2", "count": 1}, {"name": "mouse2", "count": 2}, {"name": "pc2", "count": 3}, {"name": "legobatman", "count": 4}, {"name": "tablelamp1", "count": 5}])
    setNewOtherModels([]);
    setMainTable("desk3");
    setTableBuffer(deskmodels["desk3"].y_buffer);
  }

  return (
    <div>
      <AssembleHeader resetTableConfig={resetTableConfig}/>
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
                  <DeskMenu modelName={"desk3"} modelTitle={"Standing Desk"} changeTable={changeTable}/>
                  <DeskMenu modelName={"desk2"} modelTitle={"IKEA Bekant Desk"} changeTable={changeTable}/>
                  <DeskMenu modelName={"desk1"} modelTitle={"Charcoal Desk"} changeTable={changeTable}/>
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

            <h2 id="accordion-collapse-heading-4">
              <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default assemble
