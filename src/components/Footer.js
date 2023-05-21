import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer>
        <div className="px-8 py-8 blurrBackground">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="https://deskgenius.vercel.app/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DeskGenius</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <Link href="https://vercel.com/docs" target="_blank" className="hover-underline-animation">Vercel</Link>
                            </li>
                            <li>
                                <Link href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank" className="hover-underline-animation">Three.JS</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Up</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <Link href="https://github.com/thisisadityapatel/deskgenius" target="_blank" className="hover-underline-animation">Github</Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/thisisadityapatel/" target="_blank" className="hover-underline-animation">LinkedIn</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <Link href="/license" className="hover-underline-animation">License</Link>
                            </li>
                            <li>
                                <Link href="/credits" className="hover-underline-animation">Notes and Resources</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://deskgenius.vercel.app/" className="hover-underline-animation" style={{color: "aqua"}}>DeskGenius™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"> 
                    <Link href="https://github.com/thisisadityapatel/deskgenius" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                       <Icon.Github size={18}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/thisisadityapatel/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <Icon.Linkedin size={18}/>
                    </Link>
                    <Link href="" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank">
                        <Icon.Twitter size={18}/>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
