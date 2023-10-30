import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Link } from 'react-router-dom';
//import {LinkContainer} from 'react-router-bootstrap';

const ShedularNavbar = () => {
  return (
    <>
      <div className='navcontainer' >
        <Navbar>
          {/* bg="light" data-bs-theme="light" */}
          <div>
            <img src={require('./images/naanyathamain.svg').default} className="naanyathalogo" alt="naanyathamain" />
          </div>
          <Container>
            <ul className="nav mr-auto" >
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schedular">

                  <div>
                    <img src={require('./images/home_active.svg').default} className="fa fa-home" alt="home_active" style={{ filter: 'brightness(50%)' }} />
                  </div>
                  <div>Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SampleTaker">
                  {/* <div><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i></div> */}
                  <img src={require('./images/watertest_active_ico.svg').default} className="fa fa-thermometer-three-quarters" alt="watertest_active_ico" />
                  <div>Sample Taker</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Lineman">
                  {/* <div> <i class="fa fa-address-card-o" aria-hidden="true"></i></div> */}
                  <img src={require('./images/userhistory_inactive_ico.svg').default} className="fa fa-address-card-o" alt="userhistory_inactive_ico" />
                  <div>Lineman</div>
                </Link>
              </li>
            </ul>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default ShedularNavbar;