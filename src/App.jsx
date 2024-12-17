import React from "react";
import { useState } from "react";

import { Home } from "./Home";
import { Experience } from "./Experience";
import { TopBar } from "./components/TopBar";

import './css/index.css'
import './css/decoration.css'
import { Projects } from "./Projects";

export function App() {

    let [currentPage, setCurrentPage] = useState(0);
    let [currentClass, setCurrentClass] = useState('');

    let topBarElements = ['home', 'projects', 'experience', 'about me', 'editor']

    const handlePageChange = (page) => {
        let prevPage = currentPage;
        
        // Movimiento
        if (page > prevPage) {
            // derecha
            setCurrentClass('exit-left')

            setTimeout(() => {
                setCurrentClass('right-zero');
            }, 200);
            
            setTimeout(() => {
                setCurrentClass('base');
            }, 400);

        } else if(page < prevPage) {
            // Izquierda
            setCurrentClass('exit-right')

            setTimeout(() => {
                setCurrentClass('left-zero');
            }, 200);
            
            setTimeout(() => {
                setCurrentClass('base');
            }, 400);
        }
        
        setTimeout(() => {
            prevPage = page;
            setCurrentPage(page);
        }, 200);
    };

    const changePage = () => {
        let page = topBarElements[currentPage];
        
        switch (page) {
            case 'home':
                return <Home/>
            case 'projects':
                return <Projects/>
            case 'experience':
                return <Experience/>
            case 'about me':
                return <h1>sobre mi</h1>
            case 'editor':
                return <h1>editor</h1>
            default:
                return <h1>No encontre nada</h1>
        }
    }

    return (
        <div>
            <TopBar currentPage={currentPage} setCurrentPage={handlePageChange} />
            <div className={`page-content ${currentClass}`}>
                {changePage()}
            </div>
            <div className="general-page">
                <img src="src/assets/cat-yes.gif"></img>
                <h1>Ahi voy</h1>
            </div>
        </div>
    );
}