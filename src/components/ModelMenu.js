import React from 'react'
import Image from 'next/image'
import othermodels from '_data/modelcoord.json'

const ModelMenu = ({modelName, addNewModel}) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 mb-5">
        <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={"/images/" + modelName + "Image.png"} alt="Model Image" width={110} height={110}/>
        <div className="flex flex-col justify-between p-2 leading-normal">
            <div className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{othermodels[modelName].title}</div>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{othermodels[modelName].description}</p>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={(e) => {addNewModel(e, modelName)}}>Add Item</button>
        </div>
    </div>
  )
}

export default ModelMenu
