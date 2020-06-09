import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";
import "./Sidebar.css"
export default function sidebar(props) {
    return (
            <Nav vertical className="vertical-nav-bar">
                <NavItem>
                    <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/Sessions">Sessions</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/Downloads">Downloads</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/Settings">Settings</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/About">About</Link>
                </NavItem>
            </Nav> 
    )
}