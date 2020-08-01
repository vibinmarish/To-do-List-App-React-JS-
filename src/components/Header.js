import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar style={{ backgroundColor: '#123C69' }} dark expand="md">
                        <Link to="/" style={{ color: 'white', textDecoration: 'none', padding:"0.5rem"}}>
                            Todo App
                        </Link>
                        <Link  className="ml-auto"  to="/about" style={{ color: 'white', textDecoration: 'none',padding:"0.5rem" }}>
                            About
                        </Link>
                </Navbar>
            </div>
        )
    }
}


export default Header;