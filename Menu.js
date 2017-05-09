import React from 'react'
import {Link} from 'react-router'
import styles from './StartUp-Page/styles/style.css'
import {Grid, Image, Nav, Navbar, NavItem,NavDropdown,MenuItem } from 'react-bootstrap'
//import bnsfLogo from './bnsf-logo.svg'

export default class Menu extends React.Component{    

    
    render(){        
    return (
        <div>
            <div>
                <Header />
            </div>
        </div>
        ) 
    }
}

//LATER USE
//<NavItem eventKey={2} href="/#/AlarmRank">More</NavItem>

//WHEN INTEGRATING
//<MenuItem eventKey={3.1} href="/">Message Maintenance</MenuItem>

function Header(){
    return (
        <Navbar fixedTop fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to='/'>                       
                        SMART AUTOMATION
                    </Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavDropdown eventKey={3} title="Home" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href="/">Smart Automation</MenuItem>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>            
        </Navbar>    
    )
}