import myPhoto from '../assets/WhatsApp Image 2024-01-28 at 00.36.05.jpeg'
import './styles/Aboutme.css';
function Aboutme(){

    return <>
    <div style={{width:'100%'}} id='about'>

        <div className=" row align-items-center d-flex justify-content-center bg-dark " >
            <div className="col-md-4 text-light">
                <img src={myPhoto} height={600} width={500} className='mypicture p-5 img-fluid'></img>
            </div>
            <div className="col-md-4 text-light">
                   <div className='row'>
                        <div className='col-md-5 p-2' style={{border:'1px solid white',borderRadius:'10px'}}>
                            <h3 className='text-center text-danger text-danger'>Experience</h3>
                            <p className='text-center text-light'><b>2+ years</b><br /><b>
                            Full Stack developer</b></p>

                        </div>
                        <div className='col-md-6 mx-2 p-2' style={{border:'1px solid white',borderRadius:'10px'}}>
                            <h3 className='text-center text-danger'>Education</h3>
                            <p className='text-center text-light'><b>BEng.Software Engineering<br/>Masters degeree</b></p>
                            
                        </div>
                   </div>
                   <div className='mt-4'>
                    <p className='text-light'>As a full-stack developer, you possess a unique blend of skills and expertise that encompass both front-end and back-end development. You are proficient in various programming languages, frameworks, and tools required to build robust and scalable web applications. With a keen understanding of both client-side and server-side technologies, you excel in crafting seamless user experiences while ensuring the functionality and performance of the underlying systems.</p>

                   </div>
            </div>
           


        </div>
        </div>
    
    
    </>


}
export default Aboutme