import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer(){
     return(
          <>
               <footer className="container-fluid nav_bg bg-dark"> 
                    <div className="row">
                         <div className="col-11 mx-auto">
                              <nav className="navbar navbar-expand-lg navbar-dark">
                                   <div className="container-fluid">
                                        <a className="navbar-brand" href="#">Cpyright 
© 2021. All Right Reserved</a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                             <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                  <li className="nav-item">
                                                       <a className="nav-link active" aria-current="page" href="https://ayushkumarsoni.com">Ayush Kumar Soni Made By <FontAwesomeIcon icon={faHeart} /></a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </nav>
                         </div>
                    </div>
               </footer> 
          </>
     );
}

export default Footer;