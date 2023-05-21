import React from 'react'
import Header from '@/components/Header'
import * as Icon from 'react-bootstrap-icons'

const credits = () => {
  return (
    <div>
        <Header />
        <div className="px-10 pt-40 text-left">
            <h1 class="mb-4 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Notes</span></h1>
            
            <div className="mb-6 text-gray-500 dark:text-gray-400 text-center">
                and of course resource 👾.
            </div>

            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

            <div className="mb-6">
              <div className="my-6 text-gray-500 dark:text-gray-400">
                I had a great time exploring the realm of three.js and diving headfirst into building small prototypes for something like this.
                My main goal was getting some hands on engineeing experience with NextJS and React. I snagged some awesome 3D models from Sketchfab.com to prototype this application, they were so cool that I decided to keep them. And guess what? I might even whip up some more 3D models myself using Blender, that is, if I don't get sidetracked by another project.
              </div>

              <div className="mb-4 text-gray-500 dark:text-gray-400">
                Right now, this project is up and running smoothly on Vercel.com. The whole deployment process was a breeze. I mean, I could have gone through dockerizing it and deploying it elsewhere, but was just feeling a bit lazy. If you have any questions about the project, feel free to reach out.
              </div>
            </div>
        </div>
    </div>
  )
}

export default credits
