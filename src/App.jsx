import React from "react";
import { useState } from "react";

import { TwitterCard } from "./TwitterCard";
import { Home } from "./Home";
import { Projects } from "./Projects"
import { TopBar } from "./TopBar";

import './css/index.css'

export function App() {
    
    let [currentPage, setCurrentPage] = useState(0);
    let prevPage = currentPage;
    
    let topBarElements = ['home','projects','experience','about me','editor']

    let changePage = () => {
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
    const handlePageChange = (page) => {
        
        if(page > prevPage){
            console.log('derecha');
            console.log('page '+ page +' prevPage '+ prevPage );
            
        }else{
            console.log('izquierda');
        }
        prevPage = page;
        setCurrentPage(page);

    };

    return (
        <div>
            <TopBar currentPage={currentPage} setCurrentPage={handlePageChange} />
            
            <div className={`page-content ${currentPage}`}>
                {changePage()}
            </div>
        </div>
    );
}