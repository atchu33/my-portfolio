import HeroImg from '../assets/atchu-bg-remove.png';
import { IoMdMail } from "react-icons/io";
import { FaGithub,FaLinkedin} from "react-icons/fa";
import { useTypewriter,Cursor } from "react-simple-typewriter";

export default function Hero(){

    const [text] = useTypewriter({
       words:['Frontend Developer','Aspiring fullstack developer','Entry-level Python developer'],
       loop:{},
    }) 

    const config={
      social:{
        linkein:'https://www.linkedin.com/in/atchaya-kannan-713424211/',
        github:'https://github.com/atchu33',
        mail:'atchayakannan03@gmail.com'
      }
    }


    return <section className="flex flex-col md:flex-row px-5 py-32 bg-emerald-950 justify-center">
        <div className='md:w-1/2 mt-10'>
           <h1 className='text-white text-6xl font-hero2-font'>Hi, <br/>I'm <span className='text-yellow-500 font-hero-font'>ATCHAYA</span> 
              <p className='text-2xl pt-2'>I'm a <span className='text-yellow-500'>{text}</span>
              <span><Cursor/></span></p>
           </h1> 
           <div className='flex py-10'>
             <a href={config.social.linkein} className='pr-5 '><FaLinkedin size={30} className='text-yellow-500 hover:text-black'/></a>
             <a href={config.social.github} className='pr-5 '><FaGithub size={30} className='text-yellow-500 hover:text-black'/></a>
             <a href="mailto:{config.social.mail}" className='pr-5 '><IoMdMail size={30} className='text-yellow-500 hover:text-black'/></a>
           </div>          
        </div>
        <div className='md:w-1/3 div hero-img flex justify-center items-center'>
              <img src={HeroImg} className='rounded bg-fuchsia-200 border-fuchsia-400 md:ms-10'  ></img>
        </div>
               
    </section>
}