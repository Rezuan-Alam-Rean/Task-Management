import { FaFacebook,  FaMailBulk,  FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaTwitter,  } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 bg-dark">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-light mb-3">About Us</h5>
                    <p className="text-light">Welcome to our Task Management website! We are passionate about providing an efficient and user-friendly task management system. Our platform is designed to help you keep track of your tasks, improve productivity, and manage your time more effectively. Join us on a journey towards better task management and increased productivity.</p>
                </div>
    
                <hr className="clearfix w-100 d-md-none pb-0"/>
    
                <div className="col-md-3 mb-md-0   text-light">
                    <h5 className="text-light mb-3">KEEP CONNECTED</h5>
                 <div className='ms-0'>
                    
                 <p>   <FaFacebook className='text-light' style={{ fontSize: "1.5rem" }}></FaFacebook> <span>Like us on Facebook</span></p>
                      <p>   <FaTwitter className='text-light' style={{ fontSize: "1.5rem" }}></FaTwitter> <span>Follow us on Twitter</span></p>
                     <p>    <FaPinterest className='text-light' style={{ fontSize: "1.5rem" }}></FaPinterest> <span>Follow us on Pinterest</span></p>
                 </div>
                   
                  
                </div>
    
                <div className="col-md-3 mb-md-0 ">
                    <h5 className="text-light mb-3">REACH US</h5>
                    <div className="text-light">
                       <p> <FaMapMarkerAlt  style={{ fontSize: "1.5rem" }}></FaMapMarkerAlt> <span>road-32,Dhaka</span></p>
                       <p> <FaPhoneAlt  style={{ fontSize: "1.5rem" }}></FaPhoneAlt> <span>Phone: (415) 124-5678</span></p>
                       <p> <FaMailBulk  style={{ fontSize: "1.5rem" }}></FaMailBulk> <span>support@taskmanager.com</span></p>
                      
                    </div>
                </div>
            </div>
        </div>
    
        <div className="text-light text-center py-3 black">© 2023 Copyright:Rezuan alam rean
        </div>
    
    </footer>
    );
};

export default Footer;
