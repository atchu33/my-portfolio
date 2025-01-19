import AboutImg from '../assets/atchu-bg-remove.png'

export default function About(){
    return <section className='flex flex-col justify-center bg-emerald-950 px-5 py-5 md:flex-row' id='about'>
         <div className='md:w-1/3 flex justify-center items-center div aboutimg'>
            <img src={AboutImg} className='rounded bg-slate-400' />
         </div>
         <div className='py-5 ps-10 md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
               <h1 className='text-5xl border-b-2 text-yellow-500 border-yellow-500 mb-5 w-[250px] font-bold  font-hero-font'>About Me</h1>
               <div className='me-10 text-white 1xl font-hero2-font'>
                  <p>As a passionate and detail-oriented web developer,I specialize in crafting responsive,scalable and user-friendly web applications.</p>
                  <br/>
                  <p>With a strong foundation in HTML5,CSS3,Javascript and frameworks lie React.Js and Bootstrap. I excel in transforming designs into functional and engaging
                  digital experiences.
                  </p>
                  <br/>
                  <p>Also have extensive experience in backend development including database management using MongoDB and SQL server.</p>
               </div>
                
            </div>
         </div>
    </section>
}