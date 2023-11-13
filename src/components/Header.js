import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons';
import autoprefixer from 'autoprefixer';

const Header = () => {
    return (  
    <nav className="backdrop-filter backdrop-blur-lg bg-opacity-90 fixed w-full z-20 top-0 left-0 border-b border-gray-800 dark:border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <Link href="./" className="flex items-center">
          <img src="/companyLogo/deskgeniusLogo.png" className="h-8 mr-3" alt="Deskgenius Logo" width={30}/>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DeskGenius</span>
      </Link>
      <div className="flex md:order-2">
          <Link href="https://github.com/thisisadityapatel/deskgenius" target="_blank" className="mx-4 pt-3 text-gray-200 hover:text-gray-500 mb-2"><Icon.Github size={20}/></Link>
          <Link href="https://www.linkedin.com/in/thisisadityapatel/" className="mx-1 pt-3 text-gray-200 hover:text-gray-500 mb-2"><Icon.Linkedin size={20}/></Link>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 font-normal" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 text-gray-500">
          <li>
            <Link href="./" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
          </li>
          <li>
            <Link href="/license" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">License</Link>
          </li>
          <li>
            <Link href="/credits" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project Notes</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    )
}
export default Header
