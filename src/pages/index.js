import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })
import * as Icon from 'react-bootstrap-icons';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="text-center" style={{marginTop: '30vh'}}>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-7xl lg:text-8xl dark:text-white">
            <span className="word word1">Design.</span>
            <span className="word word2">Preview.</span>
            <span className="word word3">Decide.</span>
          </h1>
        </div>
        <div className="marginauto md:w-5/6 lg:w-4/6">
          <div className="text-center tracking-widest font-normal text-gray-500 md:text-lg dark:text-gray-400 my-8">
              Are you tired of the guesswork when it comes to your table arrangements? Look no further! Use our powerful 3D rendering technology for visualizing table arrangements before purchasing.
          </div>
          <div className="text-center my-8 py-4">
            <Link type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 w-40" href="/credits">Learn More</Link>
            <a className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group button-color group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white dark:focus:ring-gray-800 w-40" href="./assemble">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-40">
                  Start Designing
              </span>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500" style={{marginTop: '7rem'}}>
        <span style={{fontSize: "130%"}} className="wave mx-1">🎃</span> Designed & Developed by Aditya Patel © 2023
        </div>
      </div>
      <div className="indexSellingStyle py-48" style={{marginTop: "20rem", borderTop: "2px solid black"}}>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Unleash your imagination, let's recreate it together!</h2>
              <p className="mb-4">DeskSpacing is a platform that helps you design a visually appealing and practical desk setup. You can explore a wide range of objects and components to plan your layout before making any purchases. Our user-friendly interface allows you to customize your setup, experiment with different configurations, and optimize your desk space.</p>
              <p> With DeskSpacing, you can save time, money, and create the ideal workspace.</p>
              <a href="./assemble" className="inline-flex items-center text-white font-medium rounded-lg px-5 py-2.5 text-center">
                  <span className="pr-2 hover-underline-animation" style={{color: "aqua"}}>Get started </span> <Icon.ArrowRight size={20}  className="wave"/>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src="/images/desksetup1.png" alt="setput image" />
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 py-60" style={{ borderTop: "2px solid black"}}>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image className="w-full hidden dark:block" src="/images/tableLayout.png" alt="dashboard image" style={{borderRadius: "14px", border: "1px solid aqua"}} height={800} width={800} quality={100} priority/>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel, we turbocharged it! </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Our arsenal comprises models from leading industry giants, empowering you with enhanced comprehension of your desktop arrangements and dimensions.</p>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">The central objective of this project was to refine React skills and cultivate a comprehensive understanding of Three.js, leveraging the power of Three Fiber as a valuable tool.</p>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Some of the technologies used for engineering this project were:</p>
            <div className="flex grid grid-cols-4 px-8 my-1">
              <a href="https://react.dev/" target='_blank' className="hover-underline-animation techIconsTransition" aria-label='React'><Image src="/techLogos/react.png" height={40} width={40}/></a>
              <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" className="hover-underline-animation techIconsTransition" target='_blank' aria-label='Three.JS'><Image src="/techLogos/three.png" height={42} width={42}/></a>
              <a href="https://tailwindcss.com/" className="hover-underline-animation techIconsTransition" target='_blank' aria-label='Tailwind CSS'><Image src="/techLogos/tailwind.png" height={40} width={40}/></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="hover-underline-animation techIconsTransition" target='_blank' aria-label='JavaScript ES6+'><Image src="/techLogos/javascript1.png" height={30} width={30}/></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
