export default function Contact(){

    const config={
        email:'atchayakannan03@gmail.com',
        mobile:'+91 9843362545'
    }

    return <section className='flex flex-col justify-center items-center bg-emerald-950 md:pb-20' id="contact" >
        <div className='text-white flex md:p-10 p-5 mt-5 flex-col items-center bg-lime-950 rounded md:w-1/2'>
            <h1 className='text-5xl font-hero-font border-b-2 border-yellow-500 text-yellow-500 mb-5 w-[170px] font-bold'>Contact</h1>
            <p className='text-2xl text-center font-hero2-font'>If you want to discuss more in detail with me, Please contact</p>
            <p className="py-2 cursor-pointer font-hero2-font" href="mailto:{config.email}"><span className="font-bold">Email : </span>{config.email}</p>
            <p className="py-2 font-hero2-font"><span className="font-bold">Mobile : </span>{config.mobile}</p>
            <p className="py-2 font-hero2-font"><span className="font-bold">Whatsapp :</span>{config.mobile}</p>
        </div>
    </section>
}