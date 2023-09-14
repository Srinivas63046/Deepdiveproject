

import { Outlet, Link } from "react-router-dom";
import './Layout.css'


const Layout = () => {
    return (
        <>
            <div className="pro-container">
                <nav>
                    <div className="nav-container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        
                                        <div className="col col-lg-8">
                                        <div className="row justify-content-md-center">
                                            </div>
                                            <ul  className="nav-bar-list" >
                                            <li className="nav-item active" style={{marginRight:'500px'}}  >
                                                    <Link className="nav-link" to="/Home">Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/Pets">Pets</Link>
                                                </li>
                                               
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/Services">Services</Link>
                                                </li>
                                                
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </div>
                </nav>
                
            </div>
            <Outlet />
            
        </>
    )
};

export default Layout;