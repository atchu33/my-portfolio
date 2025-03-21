import ResumeImg from '../assets/resume.jpg'
import resume from '../assets/ATCHAYA-fullstack-developer.pdf'

export default function Resume()
{
    return <section className='flex flex-col justify-center bg-emerald-950 px-5 py-32 md:flex-row' id='resume' >
         <div className='md:w-1/3 flex justify-center div'>
            <img className='w-[300px]' src={ResumeImg} />
         </div>
         <div className='py-5 md:w-1/2 text-white flex justify-center'>
            <div className='flex flex-col justify-center'>
               <h1 className='text-5xl font-hero2-font border-b-2 border-yellow-500 text-yellow-500 mb-5 w-[170px] font-bold'>Resume</h1>
                <p className='font-hero2-font'>You can view my resume      <a className='btn font-hero2-font' href={resume} download='resume'>Download</a></p>
            </div>
         </div>
    </section>
}