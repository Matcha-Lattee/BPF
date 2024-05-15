
import fibertray from './images/cs.png'
import SCP from './images/wtUI.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';

export default function Projects()
{
    return(
        <div>
        <br></br>
        <br></br>
        <br></br>
        <div class = "row">
            <div class = "col-sm-1"></div>
                <div class = "col-sm-6">   
                <br></br>
                <br></br>
                        <p id = 'projects-title'>Projects </p>
                        <h2>Work Projects: </h2>
                        <p>Fiber Splice Tray </p>
                        <p><b>Objective:</b> Design a new fiber optic solution for our customers to accomodate for 24 fiber cables but fits within our current enclosure</p>
                        Features:
                        <ul>
                            <li>Accomodates up to 24 fiber cables</li>
                            <li>12 Splice Sleeve Holders</li>
                            <li>Stackable</li>
                            <li>Compatible with all ICC <a href="https://icc.com/product-category/fiber-optic-system/enclosures/" target='_blank'>Fiber Optic Enclosures</a></li>
                        </ul>
                </div>
            <div class = "col-sm-5">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img src={fibertray} alt="profile-img" style={{ width: '57%', height: 'auto' }} /></div>
        </div>

        <div class = "row">
            <div class = "col-sm-1"></div>
                <div class = "col-sm-6">   
                <br></br>
                <br></br>
                        <h2>Senior Capstone Project: </h2>
                        <p>Asteroid County </p>
                        <p><b>Objective:</b> Create an educational and interactive website all about asteroids. Users can explore and discover near earth asteroids everyday! 
                        Features an Impact Simulator to engage users to learn about asteroid impacts! Users have the choice of creating their own asteroid or pick from the list of 
                        current near earth asteroids!</p>
                        <a href="https://asteroid-county.vercel.app/" target='_blank'>Come Visit Asteroid County!</a>
                </div>
            <div class = "col-sm-5">
                <br></br>
                <br></br>
                <br></br>
                <img src={SCP} alt="profile-img" style={{ width: '57%', height: 'auto' }} /></div>
        </div>
    </div>
        
    );
}