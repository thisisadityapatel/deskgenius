import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import * as Icon from 'react-bootstrap-icons';


export default function Home() {
  const copyRightsYear = new Date().getFullYear();
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup function
    return () => {
        if (videoRef.current) {
            observer.unobserve(videoRef.current);
        }
    };
  }, []);

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
          <div className="text-center tracking-widest font-normal text-gray-500 md:text-sm dark:text-gray-400 my-8">
              Are you tired of the guesswork when it comes to your desktop setup? Look no further! Use the powerful 3D rendering technology for visualizing desktop arrangements before purchasing.
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
        <div className="text-center text-gray-500 text-sm" style={{marginTop: '7rem'}}>
        <span style={{fontSize: "130%"}} className="wave mx-1">⚙️</span><span className='normal'>Developed by <span style={{textDecoration: "underline"}}><a href="https://www.linkedin.com/in/thisisadityapatel/" target='_blank'>Aditya Patel</a></span> © {copyRightsYear} All Rights Reserved.</span>
        </div>
      </div>

      <div className="indexSellingStyle py-60" style={{marginTop: "20rem", borderTop: "2px solid black"}}>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          {/* <Image className="w-full hidden dark:block shadow" src="/images/tableLayout2.png" alt="dashboard image" style={{borderRadius: "14px", border: "2px solid aqua"}} height={900} width={800} quality={100} priority={true}/> */}
          {/* <video controls ref={videoRef} autoPlay={true} muted={true} loop width="640" height="360" style={{borderRadius: "14px", border: "2px solid aqua"}}>
            <source src="https://onnjgghecx8f2iuc.public.blob.vercel-storage.com/introVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <video controls ref={videoRef} autoPlay={true} muted={true} loop width="640" height="360" style={{borderRadius: "14px", border: "2px solid aqua"}}>
            <source src="https://github.com/thisisadityapatel/deskgenius/assets/79132756/67503be7-3527-4093-b8d7-9997c82d9439" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="font-light text-gray-500 sm:text-sm dark:text-gray-400 mt-5">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Didn't reinvent the wheel, just <span className="animate-charcter">turbocharged</span> it!</h2>
              <p className="mb-4">DeskSpacing is a platform that helps you design a visually appealing and a practical desktop setup. Utilizes graphic ray tracing, texture mapping and advanced algorithms to optimize rendering performance and reduce computational overhead, resulting in a highly responsive UI.</p>
              <br/>
              <p> With DeskSpacing save your time, money and energy, all from the comfort of your home.</p>
              <a href="./assemble" className="inline-flex items-center text-white font-medium rounded-lg py-2.5 text-center">
                  <span className="hover-underline-animation mr-2" style={{color: "white"}}>Get started for Free </span> <Icon.ArrowRight size={20}  className="wave" style={{color: "aqua"}}/>
              </a>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 py-48" style={{ borderTop: "2px solid black"}}>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-sm dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Unleash your imagination, let's recreate it together!</h2>
              <p className="mb-6 font-light text-gray-500 md:text-sm dark:text-gray-400">You can explore a wide range of objects and components to plan your layout before making any purchases. The user-friendly interface allows you to customize your setup, experiment with different configurations, and optimize your desk space.</p>
              <p className="mb-6 font-light text-gray-500 md:text-sm dark:text-gray-400">The arsenal comprises of models from leading industry giants, empowering you with enhanced comprehension of your desktop arrangements and dimensions.</p>
              <p className="mb-6 font-light text-gray-500 md:text-sm dark:text-gray-400">Some of the technologies used for engineering this project were:</p>
              <div className="flex grid grid-cols-7 px-8 my-1">
                <a href="https://react.dev/" target='_blank' className="hover-underline-animation techIconsTransition" aria-label='React'><Image src="/techLogos/react.png" height={40} width={40} alt="React Logo" priority={true}/></a>
                <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" className="hover-underline-animation techIconsTransition" target='_blank' aria-label='Three.JS'><Image src="/techLogos/three.png" height={42} width={42} alt="ThreeJS Logo" priority={true}/></a>
                <a href="https://tailwindcss.com/" className="hover-underline-animation techIconsTransition" target='_blank' aria-label='Tailwind CSS'><Image src="/techLogos/tailwind.png" height={40} width={40} alt="TailwindCSS Logo" priority={true}/></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="hover-underline-animation techIconsTransition" target='_blank' aria-label='JavaScript ES6+'><Image src="/techLogos/javascript1.png" height={30} width={30} alt="JavaScript Logo" priority={true}/></a>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src="/images/desksetup1.png" alt="setput image"/>
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" style={{borderRadius: "14px", border: "1px solid black", boxShadow: "25px rgba(0, 0, 0)"}}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
