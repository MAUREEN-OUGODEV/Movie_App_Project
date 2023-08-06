import React from 'react';
import'./style.css';
const Footer=()=>{
return(
    <div className='footer'>
        <div className='container-fluid'>
            <div className='row'>
                <hr></hr>
            <div className='col-md-2 header'>
                 <h5 className='footer-header'>DownLoad our App</h5>
                 <p><i class="icon ion-logo-playstation"> PlayStation</i></p>
                 <p><i class="icon ion-md-play">Playstore</i></p>
                 <p><i class="icon ion-logo-apple">App store</i></p>


                </div>
                <div className='col-md-2 header'>
                 <h5 className='footer-header'>Navigation</h5>
                 <p>Home</p>
                 <p>My List</p>
                 <p>About Us</p>

                </div>
                <div className='col-md-2 header'>
                 <h5 className='footer-header'>Legal</h5>
                 <p>General info</p>
                 <p>Privacy Policy</p>
                 <p>Terms of Services</p>

                </div>
                <div className='col-md-2 header'>
                 <h5 className='footer-header'>Contact Us</h5>
                 <p>support@gmail.com</p>
                 <p>Tel:+23456788</p>
                 <p></p>

                </div>
                <div className='col-md-2 header'>
                 <h5 className='footer-header'>Share Website Via:</h5>
                 <p ><i class="icon ion-logo-facebook"></i></p>
                 <p><i class="icon ion-logo-twitter"></i></p>
                 <p><i class="icon ion-logo-instagram"></i></p>
                 

                </div>
              




            </div>

        </div>

    </div>
)


}
export default Footer;