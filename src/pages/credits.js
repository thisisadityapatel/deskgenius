import React from 'react'
import Header from '@/components/Header'
import Link from 'next/link'

const credits = () => {
  return (
    <div>
        <Header />
        <div className="container mx-auto pt-40 text-left">
            <h1 className="mb-4 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Notes</span></h1>
            
            <div className="mb-6 text-gray-500 dark:text-gray-400 text-center">
                and of course resource 👾.
            </div>

            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

            <div className="mb-6 text-md">
              <div className="my-6 text-gray-500 dark:text-gray-400">
                I had a great time exploring the three.js and diving headfirst into building small prototypes for something like this.
                My main goal was getting some hands on engineeing experience with <Link href="https://nextjs.org/" target='_blank' className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">NextJS</Link>. 
                I snagged some awesome 3D models from <Link href="https://sketchfab.com/" target='_blank' className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">Sketchfab.com</Link> to prototype this application, 
                they were so cool that I decided to keep them. I might even whip up some more 3D models myself using <Link href="https://www.blender.org/" target='_blank' className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">Blender</Link>, that is, if I don't get sidetracked by another project.
              </div>
              <div className="mb-8 text-gray-500 dark:text-gray-400">
                Right now, this project is up and running smoothly on <Link href="https://vercel.com/docs" target='_blank' className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">Vercel.com</Link>. The whole deployment process was a breeze. I mean, 
                I could have gone through dockerizing it and deploying it elsewhere, but was just feeling a bit lazy.
                I opted to use <Link href="https://tailwindcss.com/docs/installation" target='_blank' className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">Tailwind CSS</Link> for styling the project, found it better than Bootstrap, for sure.
                For the 3D rendering side of things, I used <Link href="https://github.com/pmndrs/react-three-fiber" target='_blank' className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">Three Fiber</Link>, which is based on Three.js but for react.
                If you have any questions about the project, feel free to reach out on <Link href="https://www.linkedin.com/in/thisisadityapatel/" target='_blank' className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">LinkedIn</Link>.
              </div>
            </div>
        </div>
    </div>
  )
}

export default credits
