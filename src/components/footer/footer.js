import './footer.css'
import glogo from './gitlogo.png'

export default function Footer() {
    return (
    <footer>
        <a href='https://github.com/Matcha-Lattee' target='_blank'><img src={glogo} alt='GLogo' style={{width:'3%', height:'auto'}}></img></a>
    </footer>);
}
