import React from "react";
import { useState } from "react";

import { TwitterCard } from "./TwitterCard";
import { Home } from "./Home";
import { Projects } from "./Projects"
import { TopBar } from "./TopBar";

import './css/index.css'

export function App() {

    let [currentPage, setCurrentPage] = useState(0);
    let [currentClass, setCurrentClass] = useState('');

    let prevPage = currentPage;

    let topBarElements = ['home', 'projects', 'experience', 'about me', 'editor']

    const handlePageChange = (page) => {
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
                return <Home></Home>
            case 'projects':
                return <Projects></Projects>
            case 'experience':
                return <h1>experience</h1>
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
        </div>
    );
}