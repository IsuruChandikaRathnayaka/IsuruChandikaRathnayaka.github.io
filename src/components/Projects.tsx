import img1 from "../assets/Screenshot 2024-04-01 at 13.06.04.png"
import img2 from "../assets/Screenshot 2024-04-01 at 13.35.04.png"
import img3 from "../assets/Screenshot 2024-04-01 at 13.38.41.png"
import img4 from "../assets/Screenshot 2024-04-01 at 13.40.46.png"
import img5 from "../assets/Screenshot 2024-04-01 at 13.43.49.png"
import img6 from "../assets/Screenshot 2024-04-01 at 13.54.41.png"

function Projects(){
    return <>
    <div className="bg-dark pb-5 " id="projects">
    <h2 className="text-light text-center pt-5">Some of my recent projects</h2>
    <div className="row align-items-center d-flex justify-content-center pt-5">
        <div className="col-md-3" >
        <div className="card" style={{height:"350px"}}>
            <img src={img1} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><b>The Vocal Wizards</b></h5>
                <p className="card-text">This is a website created to do automatic audio mixing and mastering </p>
                <a href="#" className="btn btn-danger">Visit</a>
            </div>
        </div>

        </div>
        <div className="col-md-3">
        <div className="card" style={{height:"350px"}}>
            <img src={img2} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><b>OpenEDlibrary</b></h5>
                <p className="card-text">A platform that have all the free books and courses,all of them are free</p>
                <a href="#" className="btn btn-danger disabled">Visit</a>
            </div>
        </div>

        </div>
        <div className="col-md-3">
        <div className="card" style={{height:"350px"}}>
            <img src={img3} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><b>Helth care App</b></h5>
                <p className="card-text">This is a helth care app created to manage work in helth care insdustry</p>
                <a href="#" className="btn btn-danger disabled">Visit</a>
            </div>
        </div>

        </div>
        <div className="col-md-3">
        <div className="card" style={{height:"350px"}}>
            <img src={img4} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><b>The whether app</b></h5>
                <p className="card-text">This is a whether app which is calculating the whether for the specific area.</p>
                <a href="#" className="btn btn-danger disabled">Visit</a>
            </div>
        </div>

        </div>
        <div className="col-md-3 mt-3">
        <div className="card" style={{height:"380px"}}>
            <img src={img5} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><b>ToDo Web app</b></h5>
                <p className="card-text">This is a web app created to handle todos in day to life,created using PHP as backend language</p>
                <a href="#" className="btn btn-danger disabled">Visit</a>
            </div>
        </div>

        </div>

        <div className="col-md-3 mt-3">
        <div className="card" style={{height:"380px"}}>
            <img src={img6} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><b>Online-Mart</b></h5>
                <p className="card-text">This is a app created to manage online shopping system,created by using java and java swing.Allow all operations to do in a online shopping system</p>
                <a href="#" className="btn btn-danger disabled">Visit</a>
            </div>
        </div>

        </div>
        
        



    </div>

    </div>
        
    
    </>

}
export default Projects