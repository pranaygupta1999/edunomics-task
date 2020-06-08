import React, { useState } from 'react';
import './Header.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { withRouter } from "react-router-dom";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const title = props.location.pathname.slice(1) === "" ? "Welcome to Edunomics" : "Home/"+props.location.pathname.slice(1)
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand ><h4 style={{color: "#777"}}>{title}</h4></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                        </DropdownItem>
                            <DropdownItem>
                                Option 2
                        </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText><Button>My Account</Button></NavbarText>
            </Collapse>
        </Navbar>
    )
} 
export default withRouter(Header);