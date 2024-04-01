
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {


  return (
    <>
       <Navbar></Navbar>
       <Home></Home>
       <Aboutme></Aboutme>
       <Skills></Skills>
       <Projects></Projects>
       <Contact/>
       <Footer></Footer>
    </>
  )
}

export default App
