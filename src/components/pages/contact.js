import flower from './images/flowerc.png'
import econ from './images/email.png'
import './contact.css'

export default function Contact()
{
    const handleEmailClick = () => {
        window.open('mailto:bvaquero1@csu.fullerton.edu', '_blank');
      };

    return(
        <div id="callme">
        <br></br>
        <br></br>
        <br></br>
        <div class = "row">
            <div class = "col-sm-2"></div>
                <div class = "col-sm-8">   
                <br></br>
                <br></br>
                        <p id = 'contact-title'> Let's keep in touch ~ </p>
                        <p id='emailme'>Email me! :  <button class='emailbtn' onClick={handleEmailClick}><img src={econ} style={{width:'100%', height:'auto'}}></img></button> </p>
                       
                       
                </div>
            <div class = "col-sm-2">
        </div>
    </div>
    </div>
        
    );
}