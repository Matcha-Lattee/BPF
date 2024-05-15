import gigiImage from './images/gigi.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

export default function About()
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
                        <p id = 'about-title'>About me </p>
                        <p id> Hello i am Betty! i am a soon to be CSUF Computer Science graduate who is interested in pursing a career in UI/UX design. Currently I work part time as a CAD drafter for <a id = 'worklink' href = "https://icc.com/about-us/" target = '_blank'>ICC</a>.</p>
                        <p id> Skills: </p>
                        <ul>
                            <li>SolidWorks</li>
                            <li>HTML/CSS/JS</li>
                            <li>Adobe Photoshop</li>
                        </ul>
                        <p >Like's</p>
                        <ul>
                            <li>Matcha Lattee's</li>
                            <li>Drawing</li>
                            <li>Dogs</li>
                            <li>When my code actually works!</li>
                        </ul>
                </div>
            <div class = "col-sm-5">
                <br></br><br></br><br></br>
                <img src={gigiImage} alt="profile-img" style={{ width: '57%', height: 'auto' }} /></div>
        </div>
    </div>
        
    );
}