import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
    return (  
    <nav className="backdrop-filter backdrop-blur-lg bg-opacity-90 fixed w-full z-20 top-0 left-0 border-b border-gray-800 dark:border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <a href="https://deskgenius.vercel.app/" className="flex items-center">
          <img src="/companyLogo/deskgeniusLogo.png" className="h-8 mr-3" alt="Deskgenius Logo" quality={100}/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DeskGenius</span>
      </a>
      <div className="flex md:order-2">
          <a type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" href="/assemble">Get started</a>
          <Link href="https://github.com/thisisadityapatel/deskgenius" target="_blank" className="mx-4 pt-3 text-gray-200 hover:text-gray-500"><Icon.Github size={20}/></Link>
          <Link href="https://www.linkedin.com/in/thisisadityapatel/" className="mx-1 pt-3 text-gray-200 hover:text-gray-500"><Icon.Linkedin size={20}/></Link>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 font-normal" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 text-gray-500">
          <li>
            <Link href="./" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
          </li>
          <li>
            <Link href="/credits" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notes</Link>
          </li>
          <li>
            <Link href="/license" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">License</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    )
}
export default Header
