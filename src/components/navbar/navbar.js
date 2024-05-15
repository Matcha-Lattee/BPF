import './navbar.css'
import flower from './flowerc.png'

export default  function Navbar() {
    
    return (
    <nav className="nav">
        <a href="/" className="site-title">BV<img src ={flower} style={{width: '5%', height:'auto',padding: 'none'}}></img></a>
        <ul>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/projects">Projects</CustomLink>
            <CustomLink href="/contact">Contact</CustomLink>
        </ul>
    </nav>);
}

function CustomLink ({href,children, ...props})
{
    const path = window.location.pathname
    return(
        <li className={path === href ?"active":""}>
        <a className='ok' href={href} {...props}>{children}</a>
        </li>

    )

}
 
