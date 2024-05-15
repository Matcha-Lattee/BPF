import Navbar from './components/navbar/navbar';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Footer from './components/footer/footer';

function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/about":
      component = <About/>
      break
    case "/projects":
      component = <Projects/>
      break
    case "/contact":
      component = <Contact/>
      break

      }
  return (
    <>
    <Navbar/>
    {component}
    <Footer/>
  </>
  );
}

export default App;
