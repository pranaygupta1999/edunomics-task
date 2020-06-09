import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import "./Sidebar.css"
export default function sidebar(props) {
    return (
        <div>
            <Nav vertical className="vertical-nav-bar">
                <NavItem>
                    <NavLink ><Link to="/">Home</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/Sessions">Sessions</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/Downloads">Downloads</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/Settings">Settings</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/About">About</Link></NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}