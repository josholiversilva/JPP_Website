import React, { useEffect, useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Container } from 'reactstrap';
import About from './About';
import Projects from './Projects';
import BobaAnalytics from './BobaAnalytics';
import '../Style/Main.css'

const content = JSON.parse(localStorage.getItem('content') || 1);

export default function Main() {
    const [content, setContent] = useState(1)

    // get local storage
    useEffect(() => {
        const storedContent = JSON.parse(localStorage.getItem('content'));
        if (storedContent) setContent(storedContent);
    }, [1]) // [] = get after first render
  
    // set local storage
    useEffect(() => {
        localStorage.setItem('content', JSON.stringify(content));
        return () => {
            localStorage.getItem('content');
        }
    }, [content]);
  
    function changeContent(newContent) {
        setContent(newContent)
    }

    function showContent(content) {
        if (content === 1) {
            return <About />
        }   
        else if (content === 2) {
            return <Projects />
        }
        else {
            return <BobaAnalytics />
        }
    }

    return (
        <div class="main_wrapper">
            <div class="content_wrapper_1">
                { showContent(content) }
            </div>

            <div class="content_controls">
            <Navbar class="navbar_controls">
                <Container >
                    <Button onClick={() => changeContent(1)} variant="light">About</Button>
                    <Button onClick={() => changeContent(2)} variant="light">Projects</Button>
                    <Button onClick={() => changeContent(3)} variant="light">Boba</Button>
                </Container>
            </Navbar>
            </div>
        </div>
    )
}