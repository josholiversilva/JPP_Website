import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Navbar, Nav } from 'react-bootstrap';
import '../Style/Header.css';

export default function Header() {
    const [theme, setTheme] = useState('dark');

    function changeTheme(theme) {
        console.log(theme);
        setTheme(theme);
    }

    return (
        <>
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton onChange={() => changeTheme('dark')} size="small" value={1} variant="dark">Dark</ToggleButton>
                        <ToggleButton onChange={() => changeTheme('light')} size="small" value={2} variant="secondary">Light</ToggleButton>
                    </ToggleButtonGroup>
                </Nav>
            </Navbar>
        </>
    );
}