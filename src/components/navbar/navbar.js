import './navbar.css'
import flower from './flowerc.png'

function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="site-title">BV<img src ={flower} style={{width: '5%', height:'auto',padding: 'none'}}></img></a>
        <ul>
             <li>
                <a className='ok' href="/about">About</a>
            </li>
            <li>
                <a className='ok' href="/projects">Projects</a>
            </li>
            <li>
                <a className='ok' href="/contact">Contact</a>
            </li>
           
        </ul>
    </nav>);
}
 
export default Navbar;
