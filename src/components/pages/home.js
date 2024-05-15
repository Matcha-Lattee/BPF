
import flower from './images/flowerc.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';



export default function Home()
{
    return (
    
    <div className="home">
        <br></br>
        <br></br>
        <br></br>
        <div class = "row">
            <div class = "col-sm-2"></div>
                <div class = "col-sm-5">   
                <br></br>
                <br></br>
                <br></br>
                        <p id = 'home-title'>Welcome! </p>
                        <p id = 'htxt'> To Betty's Portfolio Site</p>
                </div>
            <div class = "col-sm-5"><img src={flower} alt="profile-img" style={{ width: '57%', height: 'auto' }} /></div>
        </div>
    </div>
  );
}