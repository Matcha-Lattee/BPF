import Navbar from './components/navbar/navbar';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Footer from './components/footer/footer';

function App() {
  let component
  switch(window.location.pathname){
    case "https://matcha-lattee.github.io/BPF":
      component = <Home/>
      break
    case "https://matcha-lattee.github.io/about":
      component = <About/>
      break
    case "https://matcha-lattee.github.io/projects":
      component = <Projects/>
      break
    case "https://matcha-lattee.github.io//contact":
      component = <Contact/>
      break

      }
  return (
    <>
    <Navbar/>
    <div class="container">{component}</div>
    
    <Footer/>
  </>
  );
}

export default App;
