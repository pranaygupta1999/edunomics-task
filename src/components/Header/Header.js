import React, { useState } from 'react';
import './Header.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    UncontrolledButtonDropdown
} from 'reactstrap';
import { withRouter } from "react-router-dom";
import { phy11, phy12, math11, math12 } from './sessionItems'

const dropdownphy11 = (
    <UncontrolledDropdown nav inNavbar direction="right">
        <DropdownToggle nav>
            Physics
        </DropdownToggle>
        <DropdownMenu>
            {phy11.map((element, index) => (
                <DropdownItem key={index}>
                    {element}
                </DropdownItem>
            )
            )
            }
        </DropdownMenu>
    </UncontrolledDropdown>
)
const dropdownphy12 = (
    <UncontrolledDropdown nav inNavbar direction="right">
        <DropdownToggle nav>
            Physics
        </DropdownToggle>
        <DropdownMenu>
            {phy12.map((element, index) =>
                (
                    <DropdownItem key={index}>
                        {element}
                    </DropdownItem>
                )
            )
            }
        </DropdownMenu>
    </UncontrolledDropdown>
)
const dropdownmath11 = (
    <UncontrolledDropdown nav inNavbar direction="right">
        <DropdownToggle nav>
            Math
        </DropdownToggle>
        <DropdownMenu>
            {math11.map((element, index) =>
                (
                    <DropdownItem key={index}>
                        {element}
                    </DropdownItem>
                )
            )
            }
        </DropdownMenu>
    </UncontrolledDropdown>
)
const dropdownmath12 = (
    <UncontrolledDropdown nav inNavbar direction="right">
        <DropdownToggle nav>
            Math
        </DropdownToggle>
        <DropdownMenu>
            {math12.map((element, index) =>
                (
                    <DropdownItem key={index}>
                        {element}
                    </DropdownItem>
                )
            )
            }
        </DropdownMenu>
    </UncontrolledDropdown>
)
const toggle11 = (
    <UncontrolledDropdown nav inNavbar direction="right">
        <DropdownToggle nav>
            11th
        </DropdownToggle>
        <DropdownMenu>

            {dropdownmath11}


            {dropdownphy11}

        </DropdownMenu>
    </UncontrolledDropdown>
)
const toggle12 = (
    <UncontrolledDropdown nav inNavbar direction="right">
        <DropdownToggle nav>
            12th
        </DropdownToggle>
        <DropdownMenu>

            {dropdownmath12}


            {dropdownphy12}

        </DropdownMenu>
    </UncontrolledDropdown>
)

const sessDropdown = (
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            Select Class
         </DropdownToggle>
        <DropdownMenu>
            {toggle11}
            {toggle12}
        </DropdownMenu>
    </UncontrolledDropdown>
)

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const title = props.location.pathname.slice(1) === "" ? "Welcome to Edunomics" : "Home/" + props.location.pathname.slice(1)
    const displaydropdown = props.location.pathname.slice(1) === "Sessions" ? sessDropdown : "";
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand ><h4 style={{ color: "#777" }}>{title}</h4></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {displaydropdown}
                </Nav>
                <NavbarText>
                    <UncontrolledButtonDropdown >
                        <DropdownToggle className="btn-account">
                            My Account
                    </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>My Profile</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Logout</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown></NavbarText>
            </Collapse>
        </Navbar>
    )
}
export default withRouter(Header);