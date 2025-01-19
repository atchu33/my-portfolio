import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import bootstrap from '../assets/media.png'
import reactjs from '../assets/physics.png'
import tw from '../assets/Tailwind CSS.png'
import py from '../assets/python.png'
import nodejs from '../assets/nodejs.png'
import mongo from '../assets/icons8-mongo-db-48.png'
import git from '../assets/social.png'
import github from '../assets/github.png'
import vscode from '../assets/visual-studio-code-icon.png'
import xampp from '../assets/96018_xampp_icon.png'
import sql from '../assets/sql-server.png'

export default function Skills(){
    return <section className="px-10 py-32 bg-emerald-950" id='skills'>
        <div className="flex flex-col items-center">
           <h1 className='text-5xl font-hero-font border-b-2 text-yellow-500 border-yellow-500 mb-2 w-[140px] font-bold'>Skills</h1>
           <p className="text-white mb-5 font-hero2-font">Here are some of my skills on which i have learnt..</p>
           <div className="flex flex-col md:flex-row gap-5 text-center font-hero2-font">
            <div className="border-purple-400 border-2 px-10 py-5 rounded md:w-1/2 hover:bg-lime-950 block">
                <h1 className="text-3xl bold text-white mb-2">Frontend</h1>
                <div className="flex flex-wrap justify-center">
                    <div className="skill-icon">
                        <img src={html} className='w-5'></img>
                        <p>HTML</p>
                    </div>
                    
                    <div className="skill-icon">
                        <img src={css} className='w-5'></img>
                        <p>CSS</p>
                    </div>

                    <div className="skill-icon">
                        <img src={js} className='w-5'></img>
                        <p>Javascript</p>
                    </div>
                    
                    <div className="skill-icon">
                        <img src={bootstrap} className='w-5'></img>
                        <p>Bootstrap</p>
                    </div>

                    <div className="skill-icon">
                        <img src={reactjs} className='w-5'></img>
                        <p>React.Js</p>
                    </div>

                    <div className="skill-icon">
                        <img src={tw} className='w-5'></img>
                        <p>Tailwind</p>
                    </div>
                </div>
            </div>
            <div className="border-purple-400 border-2 px-10 py-10 rounded md:w-1/2 hover:bg-lime-950 block">
                <h1 className="text-3xl bold text-white mb-2">Backend & Database</h1>
                <div className="flex flex-wrap justify-center">
                <div className="skill-icon">
                        <img src={py} className='w-5'></img>
                        <p>python</p>
                    </div>
                    <div className="skill-icon">
                        <img src={nodejs} className='w-5'></img>
                        <p>Node.js</p>
                    </div>
                    <div className="skill-icon">
                        <img src={mongo} className='w-5'></img>
                        <p>MongoDB</p>
                    </div>
                    <div className="skill-icon">
                        <img src={sql} className='w-5'></img>
                        <p>SQL</p>
                    </div>
                </div>
            </div>    
            <div className="border-purple-400 border-2 px-10 py-10 rounded md:w-1/2 hover:bg-lime-950 block">
                <h1 className="text-3xl bold text-white mb-2">Others</h1>
                <div className="flex flex-wrap justify-center">
                <div className="skill-icon">
                        <img src={git} className='w-5'></img>
                        <p>Git</p>
                    </div>
                    <div className="skill-icon">
                        <img src={github} className='w-5'></img>
                        <p>Github</p>
                    </div>
                   <div className="skill-icon">
                        <img src={vscode} className='w-5'></img>
                        <p>VS Code</p>
                    </div>
                    <div className="skill-icon">
                        <img src={xampp} className='w-5'></img>
                        <p>XAmpp</p>
                    </div>
                </div>
            </div>
                 
           </div> 
        </div>
         
    </section>
}