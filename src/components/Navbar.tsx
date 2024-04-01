import "./styles/Navbar.css"
function Navbar() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };






    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark p-4 fixed-top">
                <div className="container-fluid">
                    {/* Navbar Brand */}
                    <a className="navbar-brand text-danger" style={{fontFamily:"Rale-way",fontSize:"28px"}} href="#"><b><i>IR</i></b></a>

                    {/* Toggler/collapsibe Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Items */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" onClick={() => scrollToSection("Home")}><b>Home</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light"  onClick={() => scrollToSection("skills")}><b>Skills</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" onClick={() => scrollToSection("projects")}><b>Projects</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" onClick={() => scrollToSection("about")}><b>About</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-disabled="true" onClick={() => scrollToSection("contact")}><b>Contact</b></a>
                            </li>
                        </ul>
                    </div> 
                    <form className="nav-item d-flex">
                        <button className="btn hiringbtn" style={{ border: '1px solid red' }} type="submit" onClick={() => scrollToSection("contact")}>Hire Me</button>
                    </form>

    
                   
                </div>
            </nav>
        </>
    );
}




export default Navbar;
