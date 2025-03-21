import certificate1 from "../assets/Certificate for K.ATCHAYA for _PYTHON PROGRAMMING_.pdf";
import certificate2 from "../assets/f942be1a-74c0-4b1f-a3ac-58986936f2a3.pdf";
import certificate3 from "../assets/Python Full Stack Bootcamp Certificate.pdf";
import certificateUdemy from "../assets/udemy-certificate.pdf";
import certificate4 from "../assets/IMG_20250214_131444.jpg";
import certificate5 from "../assets/IMG_20250214_131534.jpg"

export default function Certificates(){

    const config={
        certificates:[
            {
                pdf:certificateUdemy,
                Heading:'Fullstack Web development | HTML | CSS | JS | NODEJS | JQuerry',
                description:'- from Udemy |2025|',

            },
            {   
                pdf:certificate1,
                Heading:'Online Workshop in Python programming',
                description:'- from Flyviv academy |2024| Grade A',
            },
            {
                pdf:certificate2,
                Heading:'Internship in Web development',
                description:'- from VeriTech |20/5/2024 – 20/6/2024|  Grade A',
            },
            
            {
                pdf:certificate3,
                Heading:' Certificate in 4 days basics Python Full Stack Development Bootcamp',
                description:'- from Btree |2024| Grade A',
            },{
                pdf:certificate4,
                Heading:' Certificate in Mobile app development',
                description:'- from bharathidasan university |2022| Grade A'
            }
            ,{
                pdf:certificate5,
                Heading:' Internship in .NET Framework',
                description:'-  from Marz technology,karaikudi |2024| Grade A'
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

    return <section className="bg-lime-950 px-10 py-20" id='certificates' >
    <div className="flex flex-col items-center">
      <h1 className='text-5xl font-hero-font border-b-2 text-yellow-500 border-yellow-500 mb-4 w-[300px] font-bold'>Certifications</h1>
      <div className="flex flex-col  items-stretch justify-center font-hero2-font gap-4 md:w-1/2 w-full text-white">
           {config.certificates.map((certificate)=>(
                 <div className="bg-emerald-950 div rounded flex flex-col md:flex-row md:justify-between p-4 text-center md:text-left">
                    <div>
                        <h1>{certificate.Heading}</h1>
                        <p>{certificate.description}</p>
                    </div>
                    <div className="mt-3">
                         <a className="btn" href={certificate.pdf} download={certificate.pdf}><button>View</button></a>
                    </div>
                 </div>            
           ))}     
       </div>
   </div>
</section>
}