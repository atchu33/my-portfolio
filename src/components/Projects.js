import project1 from '../assets/busbooking.png'
import project2 from '../assets/mini-ecom-home.png'
import project3 from '../assets/suba.png'
import project4 from '../assets/number game.png'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';


export default function Projects(){

    const config={
        projects:[
            {
                image:project1,
                Heading:'Online bus ticket booking system with Chatbot',
                description:'Inaugurated my academic journey with creation of this project showcasing my proficiency in HTML,CSS,JS,PHP and MySQL as database.',
                link:''
            },
            {
                image:project2,
                Heading:'Mini E-commerce website using ReactJS',
                description:'This project is developed using ReactJs and Bootstrap, demonstrates my proficiency in frontend ,responsive design,state management and MongoDB as database',
                link:'https://github.com/atchu33/Mini-ecommerce'
            },
            {
                image:project3,
                Heading:'Scuba diving Template webpage using Html,CSS and JS',
                description:'A basic website template built using Html,CSS and Js',
                link:'https://github.com/atchu33/simple-diving-webpage'
            },
            {
                image:project4,
                Heading:'Simple number guessing game! using ReactJS',
                description:'I start my React Js journey with this simple game!',
                link:'https://github.com/atchu33/simple-number-guessing-game-using-ReactJS'
            }
        ]
    }
    
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }
      
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }

    return <section className="bg-emerald-950 px-10 py-20" id='project' >
         <div className="flex flex-col items-center">
           <h1 className='text-5xl font-hero-font border-b-2 text-yellow-500 border-yellow-500 mb-4 w-[200px] font-bold'>Projects</h1>
           <p className="text-white mb-5 font-hero2-font">These are some of my projects.I have built these with the modern technologies.. CHECK them out!!!</p>
           <div className="flex flex-col flex-wrap justify-center items-center md:flex-row text-center font-hero2-font gap-4 md:px-10 px-0">
                {config.projects.map((project)=>(
                   <div className='block bg-lime-950 rounded border-2 md:w-[500px] md:h-[450px] w-[200px] h-[200px]' >
                    <div className='relative group'>
                       <img className=' h-[250px] w-full md:w-full md:h-[200px]' src={project.image}></img>           
                    </div>
                   
                   <div className='project-desc p-4'>
                       <h1 className='text-center text-2xl text-yellow-500'>{project.Heading}</h1>
                       <p className='text-white text-center'>{project.description}</p>
                       <div className='flex justify-center m-2'>
                          <a className='proj-btn btn' href={project.link}>View project</a>
                       </div>
                   </div>
                   </div>
                ))}     
            </div> 
        </div>
    </section>
}