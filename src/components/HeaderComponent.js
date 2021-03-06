import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron className="jumbotron" fluid>
                    <video width="400" id="video-background" autoPlay muted loop>
                       <source src="/assets/videos/Video-Jumbotron.mp4" type="video/mp4"/>
                    </video>
                </Jumbotron>
                <Navbar light sticky="top" expand="md">
                    <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src="/dish-tales-logo.jpg" height="90" width="150" alt="Dish Tales logo Logo"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog">
                                          <i className="fa fa-list fa-lg" /> Blog

                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/postsubmit">
                                        <i className="fa fa-pencil fa-lg" /> Submit a Post
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>

        );
    }
}

export default Header;
